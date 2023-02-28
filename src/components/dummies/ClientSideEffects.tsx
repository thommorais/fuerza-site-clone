'use client'

import TypeShuffle from '.utils/typeShuffle'

/* eslint-disable no-magic-numbers */
import { useLayoutEffect } from 'react'

let runOnce = false

function ClientSideEffects() {
	useLayoutEffect(() => {
		if (typeof window === 'undefined' || runOnce) return

		runOnce = true

		const typeShufflesEls = [...document.querySelectorAll('.type-shuffle')]

		typeShufflesEls.forEach((el) => {
			const ts = new TypeShuffle(el)
			ts.trigger('fx3')
		})
	}, [])

	return null
}

export default ClientSideEffects
