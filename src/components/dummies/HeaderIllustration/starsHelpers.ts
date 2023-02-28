/* eslint-disable no-magic-numbers */

type Stars = { x: number; y: number; z: number; r: number }[]

function lerp(a: number, b: number, t: number) {
	return b * t + a * (1 - t)
}

export function createStars({
	width,
	height,
	depth,
	numStars,
	maxRadius,
	minRadius,
}: {
	width: number
	height: number
	depth: number
	numStars: number
	maxRadius: number
	minRadius: number
}) {
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

	return [...stars].sort((a: { z: number }, b: { z: number }) => a.z - b.z)
}

const halfPI = Math.PI / 2
const doublePI = Math.PI * 2

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
		ctx.beginPath()

		if (warpMode) {
			const wf = 1.0 + 0.2 * warp
			const z2 = wf * (star.z - lastZIndex + focalLength)

			const sx2 = (focalLength * (star.x - width)) / z2
			const sy2 = (focalLength * (star.y - height)) / z2
			const r2 = (star.r * focalLength) / z2
			const beta = Math.asin((r2 - sr) / Math.hypot(sx2 - sx, sy2 - sy))

			if (!isNaN(beta)) {
				const a1 = Math.atan2(sy - sy2, sx2 - sx) - beta
				const a2 = Math.atan2(sy2 - sy, sx - sx2) + beta

				ctx.arc(sx, sy, sr, halfPI - a1, halfPI - a2, false)
				ctx.arc(sx2, sy2, r2, halfPI - a2, halfPI - a1, false)
				ctx.closePath()
			} else {
				if (sr > r2) {
					ctx.arc(sx, sy, sr, 0, doublePI, false)
				} else {
					ctx.arc(sx2, sy2, r2, 0, doublePI, false)
				}
			}
		} else {
			ctx.arc(sx, sy, sr, 0, doublePI, false)
		}
		ctx.fill()
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
	const thousand = 1000
	const updatedZ = zIndex + (speed * dt) / thousand
	let updatedIndex = index

	const updatedStars: Stars = []
	for (const star of stars) {
		const updatedStar = { ...star }
		if (updatedZ - focalLength >= star.z) {
			updatedIndex = (updatedIndex + 1) % stars.length
			updatedStar.x = Math.random() * width
			updatedStar.y = Math.random() * height
			updatedStar.r = Math.random() * dr + minRadius
			updatedStar.z += depth
		}
		updatedStars.push(updatedStar)
	}

	let t = 0
	let updatedWarp = warp
	let updatedWarpStart = warpStart
	let updatedWarpEnd = warpEnd
	const now = Date.now()

	if (warpMode) {
		if (updatedWarpStart === 0) {
			updatedWarpStart = now
		} else {
			t = (now - updatedWarpStart) / thousand
		}

		updatedWarpEnd = 0
		const x = t < 1 ? 3 * (1 - t) * t * t + t * t * t : 1
		updatedWarp = Math.min(Math.max(0, x), 1)
	} else {
		if (updatedWarpEnd === 0) {
			updatedWarpEnd = now
		} else {
			t = (now - updatedWarpEnd) / thousand
		}

		const x = t < 1 ? updatedWarp - (3 * (1 - t) * t * t + t * t * t) : 0
		updatedWarp = Math.min(Math.max(0, x), 1)
		updatedWarpStart = 0
	}

	return {
		stars: updatedStars,
		index: updatedIndex,
		focalLength: lerp(20, 12, updatedWarp),
		zIndex: updatedZ,
		speed: lerp(2.4, 24, updatedWarp),
		warp: updatedWarp,
		warpEnd: updatedWarpEnd,
		warpStart: updatedWarpStart,
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
	let focalLength = 5
	let zIndex = 0
	let speed = 20
	let warp = 0
	let warpEnd = 0
	let warpStart = 0

	const maxRadius = 1.5
	const minRadius = 0.3

	const depth = 100

	let stars: Stars = createStars({
		width,
		height,
		depth,
		numStars: 2000,
		maxRadius,
		minRadius,
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

	const halfWidth = width * 0.5
	const halfHeight = height * 0.5
	function loop() {
		if (ctx) {
			const dt = Date.now() - t0
			t0 = Date.now()
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

			speed = updatedSpeed
			stars = updatedStars
			index = updatedIndex
			focalLength = updatedFocalLength
			zIndex = updatedZ
			warp = updatedWarp
			warpEnd = updatedWarpEnd
			warpStart = updatedWrapStart

			drawStars({
				ctx,
				stars,
				index,
				focalLength,
				depth,
				zIndex: updatedZ,
				width: halfWidth,
				height: halfHeight,
				lastZIndex: zIndex,
				warp,
				warpMode,
			})

			requestAnimationFrame(loop)
		}
	}

	return loop
}
