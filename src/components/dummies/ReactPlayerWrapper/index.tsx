'use client'
import { useEffect, useState } from 'react'

import ReactPlayer from 'react-player/lazy'

function ReactPlayerWrapper({
	url,
	height = 'auto',
	width = '100vw',
}: {
	url: string
	height?: string
	width?: string
}) {
	const [display, setDisplay] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setDisplay(true)
		}
	}, [])

	if (!display) return null

	return (
		<ReactPlayer url={url} width={width} height={height} loop={true} playing={true} playsinline={true} muted={true} />
	)
}

export default ReactPlayerWrapper
