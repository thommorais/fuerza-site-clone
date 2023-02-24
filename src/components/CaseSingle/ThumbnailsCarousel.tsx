'use client'

import { useEffect } from 'react'
import type { Casetype } from './types'
import Glide from '@glidejs/glide'
import Image from 'next/image'

const sliderConfiguration = {
	startAt: 0,
	perView: 2,
	keyboard: true,
	animationDuration: 200,
	gap: 0,
	bound: true,
	breakpoints: {
		540: {
			perView: 1,
		},
	},
}

function ThumbnailsCarousel({ caseData }: { caseData: Casetype }) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const slider = new Glide('.cases-carousel', { ...sliderConfiguration, type: 'slider' })
			slider.mount()
		}
	}, [])

	const cases = [
		{
			title: 'Al Jazeera',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221228201842/carrossel-4-1.jpg',
		},
		{
			title: 'Medal.tv',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221228201834/carrossel-1-1.jpg',
		},
		{
			title: 'Matrioska',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221228201837/carrossel-2-1.jpg',
		},

		{
			title: 'Words With Friends',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221228201840/carrossel-3-1.jpg',
		},
	]

	// eslint-disable-next-line no-console
	console.log(caseData)

	return (
		<div className='cases-carousel carousel relative w-full'>
			<div data-glide-el='track'>
				<div className={`carousel-wrapper flex lg:justify-center`}>
					{cases.map(({ title, image }) => (
						<Image key={title} src={image} alt={title} width={1200} height={1200} />
					))}
				</div>
			</div>
			<div data-glide-el='controls'>
				<button data-glide-dir='>' name='next' aria-label='Next slide' className='relative'>
					<svg aria-hidden='true' viewBox='0 0 50 50' width='50' height='50' xmlns='http://www.w3.org/2000/svg'>
						<path d='M15 2.75l-2.086 2.086L33.078 25 12.914 45.164 15 47.25 37.25 25z' />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ThumbnailsCarousel
