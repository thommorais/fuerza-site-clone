'use client'

import { useEffect } from 'react'

import Glide from '@glidejs/glide'

import CaseCard from '.dummies/CaseCard'

const sliderConfiguration = {
	startAt: 0,
	perView: 4,
	keyboard: true,
	animationDuration: 200,
	gap: 5,
	bound: true,
	breakpoints: {
		1023: {
			perView: 3,
		},
		800: {
			perView: 2,
		},
		540: {
			perView: 1,
		},
	},
}

function GreatCases() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const slider = new Glide('.cases-carousel', { ...sliderConfiguration, type: 'slider' })
			slider.mount()
		}
	}, [])

	const cases = [
		{
			title: 'Al Jazeera',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221228185329/thumb_1200x1200-768x768.jpg',
			url: '/cases/al-jazeera/',
		},
		{
			title: 'Medal.tv',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221028173206/thumbnail-768x768.jpg',
			url: '/cases/medal-tv/',
		},
		{
			title: 'Matrioska',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221230145852/thumb-1200x1200-1-768x768.jpg',
			url: '/cases/matrioska/',
		},
		{
			title: 'BlueStacks X',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220218203035/thumbnail-768x768.jpg',
			url: '/cases/bluestacks/',
		},
		{
			title: 'Ready Set',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202200/tile_RS-768x768.jpg',
			url: '/cases/ready-set/',
		},
		{
			title: 'Eurekka',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812212048/thumbnail-3-768x768.jpg',
			url: '/cases/eurekka/',
		},
		{
			title: 'Jam City',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812213149/thumbnail-4-768x768.jpg',
			url: '/cases/jam-city/',
		},
		{
			title: 'OMS',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211026220024/thumbnail-768x768.jpg',
			url: '/cases/oms/',
		},
		{
			title: '8W8',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812211043/thumbnail-2-768x768.jpg',
			url: '/cases/8w8/',
		},
		{
			title: 'Branding',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202428/thumb_branding-768x768.jpg',
			url: '/cases/branding/',
		},
		{
			title: 'Harry Potter',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202228/HP-768x768.jpg',
			url: '/cases/harry-potter/',
		},
		{
			title: 'Words With Friends',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202252/WWF-768x768.jpg',
			url: '/cases/word-with-friends/',
		},
	]

	return (
		<div className='cases-carousel carousel relative w-full'>
			<div data-glide-el='track'>
				<div className={`carousel-wrapper flex lg:justify-center`}>
					{cases.map(({ title, image, url }) => (
						<CaseCard
							key={title}
							title={title}
							image={image}
							url={url}
							className='carousel-item glide__slide--active relative block'
						/>
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

export default GreatCases
