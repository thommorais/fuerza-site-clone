export interface Casetype {
	id: number
	title: string
	content: string
	url: string
	permalink: string
	skills: string
	banner: string
	stats: Stat[]
	videoURL: string
	videoPoster: string | null
	isMobile: boolean
	gallery: any[]
	caseURL: string
	caseURLLabel: string
	aboutProject: string
	keyNumbers: string
}

export interface Stat {
	name: string
	number: string
	prefix: string
}
