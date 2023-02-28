'use client'

/* eslint-disable no-magic-numbers */
import { useEffect, useRef } from 'react'

function TyopeShuffle({ text }: { text: string }) {
	const ref = useRef(null)
	const RAFref = useRef(-0)

	useEffect(() => {
		if (typeof window === 'undefined') return

		function runEffect() {
			;(async () => {
				const { default: TypeShuffle } = await import('.utils/typeShuffle')
				if (ref.current) {
					const ts = new TypeShuffle(ref.current)
					ts.trigger('fx3')
				}
			})()
		}

		RAFref.current = requestAnimationFrame(runEffect)

		return () => {
			cancelAnimationFrame(RAFref.current)
		}
	}, [])

	return (
		<span className='type-shuffle' ref={ref}>
			{text}
		</span>
	)
}

export default TyopeShuffle
