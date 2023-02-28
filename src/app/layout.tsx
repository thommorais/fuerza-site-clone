import '.styles/globals.css'

import { Space_Mono } from '@next/font/google'

import dynamic from 'next/dynamic'

const ClientSideEffects = dynamic(() => import('.dummies/ClientSideEffects'), { ssr: false })

const spaceMono = Space_Mono({
	variable: '--base-font',
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={`${spaceMono.variable} `}>
				<div className='flex flex-col min-h-screen'>
					{children}
					<footer className='footer mt-auto'>
						<svg width='66px' height='54px'>
							<use xlinkHref='#fuerza-icon'></use>
						</svg>
						<small>® Fuerza Studio - All rights reserved</small>
					</footer>
				</div>
				<ClientSideEffects />
				<svg className='hidden'>
					<symbol id='pin-icon' viewBox='0 0 93 127'>
						<path
							d='M46.5 0C20.8 0 0 20.8 0 46.5 0 74 46.5 127 46.5 127S93 76 93 46.5C93 20.8 72.2 0 46.5 0zm0 57.2c-6.9 0-12.6-5.6-12.6-12.6S39.6 32 46.5 32c6.9 0 12.6 5.6 12.6 12.6s-5.6 12.6-12.6 12.6z'
							fill='#fff'
						/>
					</symbol>
					<symbol id='phone-icon' viewBox='0 0 45.3 45.2'>
						<path
							d='M44.3 35.7l-7-7c-1.4-1.4-3.7-1.3-5.1.1l-3.5 3.5c-.2-.1-.5-.2-.7-.4-2.2-1.2-5.3-2.9-8.5-6.1-3.2-3.2-4.9-6.3-6.1-8.5-.1-.2-.3-.5-.4-.7l2.4-2.4 1.2-1.2c1.4-1.4 1.5-3.8.1-5.1l-7-7C8.2-.4 5.9-.3 4.4 1.1l-2 2v.1C1.8 4 1.3 5 .9 6 .5 7 .2 8 .1 8.9-.8 16.6 2.7 23.6 12.2 33c13.1 13.1 23.7 12.1 24.2 12.1 1-.1 1.9-.4 2.9-.7 1-.4 2-1 2.9-1.6l2-2c1.4-1.4 1.5-3.7.1-5.1zm0 0'
							fill='#fff'
						/>
					</symbol>
					<symbol id='fuerza-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 499.5 539'>
						<path className='st0' d='M334 531.5L284 355 7.5 225.5l93 176z' />
						<path className='st0' d='M212.5 7.5l265 110L284 355 7.5 225.5z' />
						<path className='st0' d='M492 291l-14.5-173.5L284 355l50 176.5z' />
						<path className='st0' d='M7.5 225.5l378.5 4.3-270.9-118.7 362.4 6.4-165.8 335.4 173.9-239L334 531.5' />
						<path className='st0' d='M284 355L59.8 324.5l251.9 128.4-211.2-51.4' />
					</symbol>
				</svg>
				<div className='dark-theme hidden'>s</div>
			</body>
		</html>
	)
}
