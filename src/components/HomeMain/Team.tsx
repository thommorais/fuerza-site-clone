import TeamCard from '.dummies/TeamCard'
import S from './styles/team.module.css'

import Link from 'next/link'

function Team() {
	const team = [
		{
			name: 'Pablo de la Rocha',
			role: 'Co-founder + Chief Creative Officer (CCO)',
			skills: 'UX Design, UI Design, Art Direction, Branding, Graphic Design, Creative Planning, Business Development',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210811194857/pablo.jpg',
		},
		{
			name: 'Diego Fagundes',
			role: 'Co-founder + Chief Technology Officer (CTO)',
			skills: 'Web and Mobile Development',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2019/08/04135921/Diego_v2.jpg',
		},
		{
			name: 'Rodrigo Meurer',
			role: 'Chief Operations Officer (COO)',
			skills:
				'Process design and management, Project portfolio management, Leadership and team management, Agile Methodologies, Requirements Analysis / PMO',
			image: 'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135823/rodrigo.jpg',
		},
		{
			name: 'Eduardo Argoud',
			role: 'VP of Design',
			skills: 'UX Design, UI Design, Art Direction, Branding, Advertising, Graphic Design, Creative Planning',
			image:
				'https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2018/08/04135827/foto_fuerza_dudu2.png',
		},
	]

	return (
		<section className={`${S.team}`} id='team'>
			<div className={S.container}>
				<h2 className={`${S.teamHeading} relative`}>
					made by a <span className='relative'>small</span>, strong and dynamic team_{' '}
				</h2>
			</div>
			<div className='relative px-6'>
				<div className='flex gap-8 flex-wrap md:flex-nowrap'>
					{team.map((member) => (
						<TeamCard
							key={member.name}
							name={member.name}
							role={member.role}
							skills={member.skills}
							image={member.image}
						/>
					))}
				</div>

				<Link href='/team' className={S.btn}>
					<div className={`${S.btnLabel} absolute right-0`}>view all</div>
					<div>
						<svg aria-hidden='true' viewBox='0 0 50 50' width='50' height='50' xmlns='http://www.w3.org/2000/svg'>
							<path d='M15 2.75l-2.086 2.086L33.078 25 12.914 45.164 15 47.25 37.25 25z' />
						</svg>
					</div>
				</Link>
			</div>
		</section>
	)
}

export default Team
