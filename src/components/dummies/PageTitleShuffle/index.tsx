'use client'

import TypeShuffle from '.utils/typeShuffle'

/* eslint-disable no-magic-numbers */
import { useEffect, useRef } from 'react'

function TyopeShuffle({ text }: { text: string }) {
	const ref = useRef(null)

	useEffect(() => {
		if (typeof window === 'undefined') return

		if (ref.current) {
			const ts = new TypeShuffle(ref.current)
			ts.trigger('fx3')
		}
	}, [])

	return (
		<span className='type-shuffle' ref={ref}>
			{text}
		</span>
	)
}

export default TyopeShuffle
