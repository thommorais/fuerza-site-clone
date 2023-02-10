import Image from 'next/image'

import S from './styles/team.module.css'

function Team() {
	return (
		<section className={`${S.team}`} id='team'>
			<div className={S.container}>
				<h2 className={`${S.teamHeading} relative`}>
					made by a <span className='relative'>small</span>, strong and dynamic team_{' '}
				</h2>
			</div>
			<div className='relative px-6'>
				<div className='flex gap-8 flex-wrap md:flex-nowrap'>
					<article className={`w-full ${S.member}`}>
						<figure className='relative'>
							<Image
								className='w-full'
								height='515'
								width='421'
								alt='Pablo de la Rocha'
								src='https://fuerza-site-production.s3.amazonaws.com/20210811194857/pablo.jpg'
							/>
							<figcaption className='absolute bottom-0'>
								<h4>skills</h4>
								<p>
									UX Design, UI Design, Art Direction, Branding, Graphic Design, Creative Planning, Business Development
								</p>
							</figcaption>
						</figure>
						<div className='py-6 px-4'>
							<h3 className={S.name}>Pablo de la Rocha</h3>
							<h3 className={S.role}>Co-founder + Chief Creative Officer (CCO)</h3>
						</div>
					</article>
					<article className={`w-full ${S.member}`}>
						<figure className='relative'>
							<Image
								className='w-full'
								height='515'
								width='421'
								alt='Diego Fagundes'
								src='https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2019/08/04135921/Diego_v2.jpg'
								data-eio='j'
							/>
							<figcaption className='absolute bottom-0'>
								<h4>skills</h4>
								<p>Web and Mobile Development</p>
							</figcaption>
						</figure>
						<div className='py-6 px-4'>
							<h3 className={S.name}>Diego Fagundes</h3>
							<h3 className={S.role}>Co-founder + Chief Technology Officer (CTO)</h3>
						</div>
					</article>
					<article className={`w-full ${S.member}`}>
						<figure className='relative'>
							<Image
								className='w-full'
								height='515'
								width='421'
								alt='Rodrigo Meurer'
								src='https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2012/08/04135823/rodrigo.jpg'
								data-eio='j'
							/>
							<figcaption className='absolute bottom-0'>
								<h4>skills</h4>
								<p>
									Process design and management, Project portfolio management, Leadership and team management, Agile
									Methodologies, Requirements Analysis / PMO
								</p>
							</figcaption>
						</figure>
						<div className='py-6 px-4'>
							<h3 className={S.name}>Rodrigo Meurer</h3>
							<h3 className={S.role}>Chief Operations Officer (COO)</h3>
						</div>
					</article>
					<article className={`w-full ${S.member}`}>
						<figure className='relative'>
							<Image
								className='w-full'
								height='515'
								width='421'
								alt='Eduardo Argoud'
								src='https://fuerza-site-production.s3.amazonaws.com/wp-content/uploads/2018/08/04135827/foto_fuerza_dudu2.png'
							/>
							<figcaption className='absolute bottom-0'>
								<h4>skills</h4>
								<p>UX Design, UI Design, Art Direction, Branding, Advertising, Graphic Design, Creative Planning</p>
							</figcaption>
						</figure>
						<div className='py-6 px-4'>
							<h3 className={S.name}>Eduardo Argoud</h3>
							<h3 className={S.role}>VP of Design</h3>
						</div>
					</article>
				</div>

				<a href='https://www.fuerzastudio.com.br/en/team' className={S.btn}>
					<div className={`${S.btnLabel} absolute right-0`}>view all</div>
					<div>
						<svg aria-hidden='true' viewBox='0 0 50 50' width='50' height='50' xmlns='http://www.w3.org/2000/svg'>
							<path d='M15 2.75l-2.086 2.086L33.078 25 12.914 45.164 15 47.25 37.25 25z' />
						</svg>
					</div>
				</a>
			</div>
		</section>
	)
}

export default Team
