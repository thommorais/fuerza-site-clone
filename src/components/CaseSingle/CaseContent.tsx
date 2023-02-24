import type { Casetype } from './types'

import Button from '.dummies/Button/LinkBtn'

import S from './styles/case.module.css'

function CaseContent({ caseData }: { caseData: Casetype }) {
	return (
		<div className={`${S.wrapper} mx-auto my-0 py-24`}>
			<div className='lg:grid grid-cols-2 gap-28'>
				<div>
					<div>
						<h3 className={`${S.subTitles} mb-6`}>project key numbers_</h3>
						{caseData.stats.map((stat) => (
							<h4 key={stat.name} className='mb-4'>
								<strong className={`${S.statNumber} mb-0`} data-number={stat.number} data-suffix={stat.prefix}>
									{stat.number + stat.prefix}
								</strong>
								<small className={S.statLabel}>{stat.name}</small>
							</h4>
						))}
					</div>

					<Button href={caseData.caseURL} title='Access the website' variant='basic'>
						Access the website_
					</Button>
				</div>
				<article>
					<h3 className={`${S.subTitles} mb-6`}>about the project_</h3>
					<div className='leading-8 my-8' dangerouslySetInnerHTML={{ __html: caseData.content }} />
					<figure className={`${S.figure} flex justify-center items-center `}>
						<div className={S.graph}>
							<svg className={S.caseGraph} viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'>
								<g fillRule='nonzero'>
									<path d='M125 5L5 95 35 246H215l30-150z'></path>
									<path d='M125 3L35 246 246 95M126 5l90 240'></path>
									<circle className={S.circles} data-ignore='true' cx='125' cy='5' r='5'></circle>
									<circle className={S.circles} data-ignore='true' cx='5' cy='95' r='5'></circle>
									<circle className={S.circles} data-ignore='true' cx='245' cy='95' r='5'></circle>
									<circle className={S.circles} data-ignore='true' cx='216' cy='245' r='5'></circle>
									<circle className={S.circles} data-ignore='true' cx='35' cy='245' r='5'></circle>
								</g>
							</svg>
						</div>
						<div className='pl-12' dangerouslySetInnerHTML={{ __html: caseData.skills }} />
					</figure>
				</article>
			</div>
		</div>
	)
}

export default CaseContent
