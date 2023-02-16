import Image from 'next/image'

import S from './styles/caseCard.module.css'

export type CaseCardProps = {
	title: string
	image: string
	url: string
	className?: string
}

function CaseCard({ title, image, url, className }: CaseCardProps) {
	return (
		<a
			href={url}
			title={`See the ${title} case`}
			className={`${S.caseItem} ${className} relative aspect-square inline-block`}
		>
			<figure className='relative w-full h-full m-0 table aspect-square'>
				<Image height={1080} width={1080} src={image} alt={title} />
				<figcaption className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${S.figCaption}`}>
					<h2 data-element='case-title' data-prefix='' data-words='' className='absolute'>
						{title}_
					</h2>
				</figcaption>
			</figure>
		</a>
	)
}

export default CaseCard
