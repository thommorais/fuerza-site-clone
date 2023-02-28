/* eslint-disable no-magic-numbers */

type Stars = { x: number; y: number; z: number; r: number }[]

type StarFieldParams = {
	stars: Stars
	maxRadius: number
	minRadius: number
	focalLength: number
	zIndex: number
	index: number
	width: number
	height: number
	depth: number
	dt: number
	speed: number
	warpStart: number
	warpEnd: number
	warp: number
	warpMode: boolean
	ctx: CanvasRenderingContext2D
}

function lerp(a: number, b: number, t: number) {
	return b * t + a * (1 - t)
}

export function createStars({
	width,
	height,
	depth,
	numStars,
}: {
	width: number
	height: number
	depth: number
	numStars: number
}) {
	const minRadius = 0.5
	const maxRadius = 2

	const dr = maxRadius - minRadius

	const stars: { x: number; y: number; z: number; r: number }[] = []

	for (let i = 0; i < numStars; ++i) {
		stars[i] = {
			x: Math.random() * width,
			y: Math.random() * height,
			z: Math.random() * depth,
			r: Math.random() * dr + minRadius,
		}
	}

	const sortedStars = [...stars].sort((a: { z: number }, b: { z: number }) => a.z - b.z)
	return sortedStars
}

export function drawStars({
	ctx,
	stars,
	index,
	focalLength,
	depth,
	zIndex,
	width,
	height,
	warp,
	lastZIndex,
	warpMode,
}: {
	ctx: CanvasRenderingContext2D
	stars: Stars
	index: number
	focalLength: number
	depth: number
	zIndex: number
	width: number
	height: number
	warp: number
	warpMode: boolean
	lastZIndex: number
}) {
	ctx.save()
	ctx.fillStyle = '#050f2d'
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	ctx.translate(0.5 * ctx.canvas.width, 0.5 * ctx.canvas.height)

	const starsCount = stars.length

	for (let i = 0; i < starsCount; ++i) {
		let currentIndex = index - 1 - i

		if (currentIndex < 0) {
			currentIndex += starsCount
		}

		const star = stars[currentIndex]

		const z = star.z - zIndex + focalLength

		if (z < 1) {
			continue
		}

		const sx = (focalLength * (star.x - width)) / z
		const sy = (focalLength * (star.y - height)) / z
		const sr = (star.r * focalLength) / z

		const color = Math.floor(224 * Math.max(1 - z / depth, 0) + 16)
		ctx.fillStyle = `rgb(${color}, ${color}, ${color})`
		ctx.globalAlpha = Math.min(Math.max(0, 1 - Math.exp(-z + 1)), 1)

		if (warpMode) {
			const wf = 1.0 + 0.2 * warp
			const z2 = wf * (star.z - lastZIndex + focalLength)

			const sx2 = (focalLength * (star.x - width)) / z2
			const sy2 = (focalLength * (star.y - height)) / z2

			const x1 = sx
			const y1 = sy
			const x2 = sx2
			const y2 = sy2
			const r1 = sr
			const r2 = (star.r * focalLength) / z2
			const beta = Math.asin((r2 - r1) / Math.hypot(x2 - x1, y2 - y1))
			const a1 = Math.atan2(y1 - y2, x2 - x1) - beta
			const a2 = Math.atan2(y2 - y1, x1 - x2) + beta

			if (!isNaN(beta)) {
				ctx.beginPath()
				ctx.arc(x1, y1, r1, Math.PI / 2 - a1, Math.PI / 2 - a2, false)
				ctx.arc(x2, y2, r2, Math.PI / 2 - a2, Math.PI / 2 - a1, false)
				ctx.closePath()
				ctx.fill()
			} else {
				ctx.beginPath()
				if (r1 > r2) {
					ctx.arc(x1, y1, r1, 0, 2 * Math.PI, false)
				} else {
					ctx.arc(x2, y2, r2, 0, 2 * Math.PI, false)
				}
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

export function animateStars({
	speed,
	stars,
	maxRadius,
	minRadius,
	focalLength,
	zIndex,
	index,
	width,
	height,
	depth,
	dt,
	warpEnd,
	warpStart,
	warp,
	warpMode,
}: {
	stars: Stars
	maxRadius: number
	minRadius: number
	focalLength: number
	zIndex: number
	index: number
	width: number
	height: number
	depth: number
	dt: number
	speed: number
	warpEnd: number
	warp: number
	warpStart: number
	warpMode: boolean
}) {
	const dr = maxRadius - minRadius
	let updatedIndex = index

	const updatedZ = zIndex + (speed * dt) / 1000

	const updatedStars: Stars = []
	for (const star of stars) {
		const updatedStar = { ...star }
		if (updatedZ - focalLength >= star.z) {
			updatedIndex = (updatedIndex + 1) % stars.length
			updatedStar.x = Math.random() * width
			updatedStar.y = Math.random() * height
			updatedStar.r = Math.random() * dr + minRadius
			updatedStar.z = star.z + depth
		}
		updatedStars.push(updatedStar)
	}

	let tr = 0
	let updatedWarp = warp
	let updatedWarpStart = warpStart
	let updatedWarpEnd = warpEnd

	if (warpMode) {
		if (updatedWarpStart === 0) {
			updatedWarpStart = Date.now()
		} else {
			tr = (Date.now() - updatedWarpStart) / 1000
		}

		updatedWarpEnd = 0
		const x = tr < 1 ? 3 * (1 - tr) * tr * tr + tr * tr * tr : 1
		updatedWarp = Math.min(Math.max(0, x), 1)
	} else {
		if (updatedWarpEnd === 0) {
			updatedWarpEnd = Date.now()
		} else {
			tr = (Date.now() - updatedWarpEnd) / 1000
		}

		const x = tr < 1 ? warp - (3 * (1 - tr) * tr * tr + tr * tr * tr) : 0
		updatedWarp = Math.min(Math.max(0, x), 1)
		updatedWarpStart = 0
	}

	const updatedSpeed = lerp(2.4, 24, updatedWarp)
	const updatedFocalLength = lerp(20, 10, updatedWarp)

	return {
		stars: updatedStars,
		index: updatedIndex,
		focalLength: updatedFocalLength,
		zIndex: updatedZ,
		speed: updatedSpeed,
		warp: updatedWarp,
		warpEnd: updatedWarpEnd,
		warpStart: updatedWarpStart,
	}
}

export function runStarField({
	speed,
	stars,
	maxRadius,
	minRadius,
	focalLength,
	zIndex,
	index,
	width,
	height,
	depth,
	dt,
	warpStart,
	warpEnd,
	warp,
	warpMode,
	ctx,
}: StarFieldParams) {
	const lastZIndex = zIndex

	const {
		stars: updatedStars,
		index: updatedIndex,
		focalLength: updatedFocalLength,
		zIndex: updatedZ,
		speed: updatedSpeed,
		warp: updatedWarp,
		warpEnd: updatedWarpEnd,
		warpStart: updatedWrapStart,
	} = animateStars({
		speed,
		stars,
		maxRadius,
		minRadius,
		focalLength,
		zIndex,
		index,
		width,
		height,
		depth,
		dt,
		warpStart,
		warpEnd,
		warp,
		warpMode,
	})

	drawStars({
		ctx,
		stars,
		index,
		focalLength,
		depth,
		zIndex,
		width: width / 2,
		height: height / 2,
		warp,
		lastZIndex,
		warpMode,
	})

	return {
		stars: updatedStars,
		index: updatedIndex,
		focalLength: updatedFocalLength,
		zIndex: updatedZ,
		speed: updatedSpeed,
		warp: updatedWarp,
		warpEnd: updatedWarpEnd,
		warpStart: updatedWrapStart,
	}
}

export function loopStarField({
	width,
	height,
	ctx,
}: {
	width: number
	height: number
	ctx: CanvasRenderingContext2D | null
}) {
	let index = 0
	let focalLength = 75
	let zIndex = 0
	let speed = 200000
	let warp = 0
	let warpEnd = 0
	let warpStart = 0

	const maxRadius = 0.8
	const minRadius = 0.04
	const depth = 35

	let stars: Stars = createStars({
		width,
		height,
		depth,
		numStars: 750,
	})

	let t0 = Date.now() - 1 / 60

	let warpMode = false

	function startWarpMpde() {
		warpMode = true
	}

	function stopWarpMode() {
		warpMode = false
	}

	window.addEventListener('mousedown', startWarpMpde)
	window.addEventListener('mouseup', stopWarpMode)

	function loop() {
		if (ctx) {
			const {
				stars: updatedStars,
				index: updatedIndex,
				focalLength: updatedFocalLength,
				zIndex: updatedZ,
				speed: updatedSpeed,
				warp: updatedWarp,
				warpEnd: updatedWarpEnd,
				warpStart: updatedWrapStart,
			} = runStarField({
				speed,
				stars,
				maxRadius,
				minRadius,
				focalLength,
				zIndex,
				index,
				width,
				height,
				depth,
				dt: Date.now() - t0,
				warpStart,
				warpEnd,
				warp,
				warpMode,
				ctx,
			})

			t0 = Date.now()
			speed = updatedSpeed
			stars = updatedStars
			index = updatedIndex
			focalLength = updatedFocalLength
			zIndex = updatedZ
			warp = updatedWarp
			warpEnd = updatedWarpEnd
			warpStart = updatedWrapStart
			requestAnimationFrame(loop)
		}
	}

	return loop
}
