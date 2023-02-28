'use client'

/* eslint-disable no-magic-numbers */
import { useRef, useLayoutEffect } from 'react'

import S from './styles/illustration.module.css'

import { loopStarField } from './starsHelpers'

type Stars = { x: number; y: number; z: number; r: number }[]

function Stars() {
	const canvas = useRef<HTMLCanvasElement>(null)

	useLayoutEffect(() => {
		if (typeof window === 'undefined' || !canvas.current) {
			return
		}

		if (!canvas.current) return

		const header = document.querySelector('header')

		let sizes = header ? header.getBoundingClientRect() : { width: 0, height: 0 }

		const width = sizes.width
		const height = (sizes.height * 98) / 100
		canvas.current.width = width
		canvas.current.height = height
		const ctx = canvas.current.getContext('2d')
		const loop = loopStarField({ width, height, ctx })

		function onResize() {
			if (canvas.current) {
				sizes = header ? header.getBoundingClientRect() : { width: 0, height: 0 }

				canvas.current.width = sizes.width
				canvas.current.height = (sizes.height * 98) / 100
			}
		}

		window.addEventListener('resize', onResize)

		const ref = requestAnimationFrame(loop)

		return () => {
			cancelAnimationFrame(ref)
			window.removeEventListener('resize', onResize)
		}
	}, [])

	return <canvas ref={canvas} className={S.canvas} />
}

export default Stars
