'use client'
import { useEffect, useState } from 'react'

import ReactPlayer from 'react-player/lazy'

function ReactPlayerWrapper({ url }: { url: string }) {
	const [display, setDisplay] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setDisplay(true)
		}
	}, [])

	if (!display) return null

	return <ReactPlayer url={url} width='100vw' height='auto' playing={true} playsinline={true} muted={true} />
}

export default ReactPlayerWrapper
