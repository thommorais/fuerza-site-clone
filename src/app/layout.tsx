import '.styles/globals.css'

import { Space_Mono } from '@next/font/google'

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
			<body className={spaceMono.variable}>
				{children}
				<div className='dark-theme hidden'>s</div>
			</body>
		</html>
	)
}
