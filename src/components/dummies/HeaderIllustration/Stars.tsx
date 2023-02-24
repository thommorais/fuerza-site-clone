'use client'

/* eslint-disable no-magic-numbers */
import { useRef, useEffect } from 'react'

function lerp(a: number, b: number, t: number) {
	return b * t + a * (1 - t)
}
const mouse = { x: 0, y: 0, down: false }

class StarField {
	x: number
	y: number
	z: number
	width: number
	height: number
	depth: number
	focalLength: number
	speed: number
	warpMode: boolean
	warp: number
	warpStart: number
	warpEnd: any
	t: number
	numStars: number
	stars: { z: number; y: number; r: number; x: number }[]
	maxRadius: number
	minRadius: number
	index: number
	z_last: any
	constructor(x: number, y: number, z: number, w: number, h: number, d: number, n: number) {
		this.x = x
		this.y = y
		this.z = z
		this.width = w
		this.height = h
		this.depth = d
		this.focalLength = 5
		this.speed = 20

		this.warpMode = false
		this.warp = 0
		this.warpStart = 0
		this.t = 0

		this.numStars = n
		// this.density = starsPer64pxCubed / (64 * 64 * 64)
		// this.numStars = Math.round(this.density * this.width * this.height * this.depth)
		this.stars = []
		this.maxRadius = 1.5
		this.minRadius = 0.3
		const dr = this.maxRadius - this.minRadius

		// Initialize n stars
		for (let i = 0; i < this.numStars; ++i) {
			this.stars[i] = {
				x: Math.random() * this.width,
				y: Math.random() * this.height,
				z: Math.random() * this.depth,
				r: Math.random() * dr + this.minRadius,
			}
		}

		// Z-sorting (only happens once)
		this.stars.sort((a: { z: number }, b: { z: number }) => a.z - b.z)
		this.index = 0
	}

	update(dt: number) {
		// Move camera forward
		this.z_last = this.z
		this.z += (this.speed * dt) / 1000

		const dr = this.maxRadius - this.minRadius

		for (const star of this.stars) {
			// Check if star is out of view
			if (this.z - this.focalLength >= star.z) {
				// Increment this.index
				this.index = (this.index + 1) % this.numStars
				// Push star back by 1 depth and randomize X, Y coordinates and radius
				star.x = Math.random() * this.width
				star.y = Math.random() * this.height
				star.z += this.depth
				star.r = Math.random() * dr + this.minRadius
			}
		}

		let t
		if (mouse.down) {
			if (this.warpStart === 0) {
				this.warpStart = Date.now()
				t = this.t
			} else {
				t = (Date.now() - this.warpStart) / 1000
			}

			// MAXIMUM WARP, ENGAGE!
			this.warpMode = true
			this.warpEnd = 0
			const x = t < 1 ? 3 * (1 - t) * t * t + t * t * t : 1
			this.warp = Math.min(Math.max(0, x), 1)
		} else {
			if (this.warpEnd === 0) {
				this.warpEnd = Date.now()
				t = 0
			} else {
				t = (Date.now() - this.warpEnd) / 1000
			}

			const x = t < 1 ? this.warp - (3 * (1 - t) * t * t + t * t * t) : 0
			this.warp = Math.min(Math.max(0, x), 1)
			if (this.warp === 0) this.warpMode = false
			this.warpStart = 0
		}

		this.speed = lerp(2.4, 24, this.warp)
		this.focalLength = lerp(20, 10, this.warp)
	}

	draw(ctx: any) {
		ctx.save()

		// Draw background
		ctx.fillStyle = '#050f2d'
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		// Put origin in center of canvas
		ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height)

		const f = this.focalLength

		// Stars
		// for (let star of this.stars) {
		for (let i = 0; i < this.numStars; ++i) {
			// Iterate backwards starting at this.index
			let index = this.index - 1 - i
			if (index < 0) index += this.numStars
			const star = this.stars[index]

			// Distance from star to focal point
			const z = star.z - this.z + f
			if (z < 1) continue

			// Pinhole camera projection transformation
			const sx = (f * (star.x - this.x)) / z
			const sy = (f * (star.y - this.y)) / z
			const sr = (star.r * f) / z

			// Interpolate color based on depth
			const color = Math.floor(224 * Math.max(1 - z / this.depth, 0) + 16)
			ctx.fillStyle = `rgb(${color},${color},${color})`

			// Alpha falloff as approaching focal point
			ctx.globalAlpha = Math.min(Math.max(0, 1 - Math.exp(-z + 1)), 1)

			if (this.warpMode) {
				// This should be correct, but produces jittery results
				// let wf = 1.0 + 20.0 * this.warp // warp factor
				// let z2 = star.z - (wf * (this.z_last - this.z) + this.z) + f

				// This seems to be more stable
				const wf = 1.0 + 0.2 * this.warp // warp factor
				const z2 = wf * (star.z - this.z_last + f)

				// Pinhole camera projection transformation (rear)
				const sx2 = (f * (star.x - this.x)) / z2
				const sy2 = (f * (star.y - this.y)) / z2

				// Calculate angles to tangents
				const x1 = sx
				const y1 = sy
				const x2 = sx2
				const y2 = sy2
				const r1 = sr
				const r2 = (star.r * f) / z2
				const beta = Math.asin((r2 - r1) / Math.hypot(x2 - x1, y2 - y1))
				const a1 = Math.atan2(y1 - y2, x2 - x1) - beta
				const a2 = Math.atan2(y2 - y1, x1 - x2) + beta

				if (!isNaN(beta)) {
					// Connect two circles by their tangents
					ctx.beginPath()
					ctx.arc(x1, y1, r1, Math.PI / 2 - a1, Math.PI / 2 - a2, false)
					ctx.arc(x2, y2, r2, Math.PI / 2 - a2, Math.PI / 2 - a1, false)
					ctx.closePath()
					ctx.fill()
				} else {
					// One circle is inside the other, draw the larger circle
					ctx.beginPath()
					if (r1 > r2) ctx.arc(x1, y1, r1, 0, 2 * Math.PI, false)
					else ctx.arc(x2, y2, r2, 0, 2 * Math.PI, false)
					ctx.fill()
				}
			} else {
				ctx.beginPath()
				ctx.arc(sx, sy, sr, 0, 2 * Math.PI, false)
				ctx.fill()
			}
		}

		ctx.restore()
	}
}

function Stars() {
	const canvas = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		if (typeof window === 'undefined' || !canvas.current) return

		if (!canvas.current) return

		const ctx = canvas.current.getContext('2d')
		canvas.current.width = window.innerWidth
		canvas.current.height = window.innerHeight

		const sf = new StarField(0, 0, 0, 2 * canvas.current.width, 2 * canvas.current.height, 100, 1000)
		sf.x = sf.width / 2
		sf.y = sf.height / 2

		canvas.current.addEventListener('mousedown', () => (mouse.down = true))
		canvas.current.addEventListener('mouseup', () => (mouse.down = false))

		// Reset canvas size, starfield size, and camera position on window resize
		window.addEventListener('resize', () => {
			if (!canvas.current) return
			canvas.current.width = window.innerWidth
			canvas.current.height = window.innerHeight
			sf.width = 2 * window.innerWidth
			sf.height = 2 * window.innerHeight
			sf.x = sf.width / 2
			sf.y = sf.height / 2
		})

		let t0 = Date.now() - 1 / 60
		function loop() {
			const dt = Date.now() - t0
			t0 = Date.now()
			sf.update(dt)
			sf.draw(ctx)
			requestAnimationFrame(loop)
		}

		requestAnimationFrame(loop)
	}, [])

	return <canvas ref={canvas} />
}

export default Stars
