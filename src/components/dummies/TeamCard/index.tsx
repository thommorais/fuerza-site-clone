import Image from 'next/image'

import S from './styles/team.module.css'

export type TeamCardProps = {
	name: string
	role: string
	skills: string
	image: string
	className?: string
}

function TeamCard({ name, role, skills, image, className = 'team-member' }: TeamCardProps) {
	return (
		<article className={`w-full ${S.member} ${className}`}>
			<figure className='relative'>
				<Image className='w-full' height='515' width='421' alt={name} src={image} />
				<figcaption className='absolute bottom-0'>
					<h4>skills</h4>
					<p>{skills}</p>
				</figcaption>
			</figure>
			<div className='py-6 px-4'>
				<h3 className={S.name}>{name}</h3>
				<h3 className={S.role}>{role}</h3>
			</div>
		</article>
	)
}

export default TeamCard
