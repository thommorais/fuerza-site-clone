'use client'

import TypeShuffle from '.utils/typeShuffle'

/* eslint-disable no-magic-numbers */
import { useLayoutEffect } from 'react'

function ClientSideEffects() {
	useLayoutEffect(() => {
		if (typeof window === 'undefined' || typeof document === 'undefined') return

		const typeShufflesEls = [...(document.querySelectorAll('.type-shuffle') || [])]

		typeShufflesEls.forEach((el) => {
			const ts = new TypeShuffle(el)
			ts.trigger('fx3')
		})
	}, [])

	return null
}

export default ClientSideEffects
