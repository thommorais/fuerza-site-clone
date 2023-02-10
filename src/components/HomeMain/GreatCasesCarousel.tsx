'use client'

import { useEffect } from 'react'

import Glide from '@glidejs/glide'
import Image from 'next/image'

import S from './styles/greatCases.module.css'

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

	return (
		<div className='cases-carousel carousel relative w-full'>
			<div data-glide-el='track'>
				<div className={`carousel-wrapper flex lg:justify-center`}>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/al-jazeera-en/'
						title='See the Al Jazeera case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20221228185329/thumb_1200x1200.jpg'
								alt='Al Jazeera'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Al Jazeera
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/medal-tv-en/'
						title='See the Medal.tv case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20221028173206/thumbnail.jpg'
								alt='Medal.tv'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Medal.tv{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/matrioska/'
						title='See the Matrioska case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20221230145852/thumb-1200x1200-1.jpg'
								alt='Matrioska'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Matrioska{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/bluestacks/'
						title='See the BlueStacks X case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20220218201921/thumbnail.jpg'
								alt='BlueStacks X'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									BlueStacks X{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/ready-set/'
						title='See the Ready Set case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20210812202827/tile_RS-1.jpg'
								alt='Ready Set'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Ready Set{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/eurekka/'
						title='See the Eurekka case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20210812212048/thumbnail-3.jpg'
								alt='Eurekka'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Eurekka{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/jam-city/'
						title='See the Jam City case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20210812213149/thumbnail-4.jpg'
								alt='Jam City'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Jam City{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/who/'
						title='See the WHO case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20211104185729/thumbnail.jpg'
								alt='WHO'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									WHO{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/8w8/'
						title='See the 8W8 case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20210812211043/thumbnail-2.jpg'
								alt='8W8'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									8W8{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/branding/'
						title='See the Branding case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20210812203406/thumb_branding-1.jpg'
								alt='Branding'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Branding{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/harry-potter/'
						title='See the Harry Potter case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20210812203252/HP.jpg'
								alt='Harry Potter'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Harry Potter{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
					<a
						href='https://www.fuerzastudio.com.br/en/cases/word-with-friends/'
						title='See the Words With Friends case'
						className={`cases-item carousel-item glide__slide--active relative block ${S.caseItem}`}
					>
						<figure className='relative w-full h-full m-0'>
							<Image
								height={1080}
								width={1080}
								src='https://fuerza-site-production.s3.amazonaws.com/20210812203313/WWF.jpg'
								alt='Words With Friends'
							/>
							<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
								<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
									Words With Friends{' '}
								</h2>
							</figcaption>
						</figure>
					</a>
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
