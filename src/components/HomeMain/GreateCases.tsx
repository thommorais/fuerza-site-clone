import dynamic from 'next/dynamic'

const GreatCasesCarouselDynamic = dynamic(() => import('./GreatCasesCarousel'), {
	loading: () => <>Loading...</>,
})

import SectionHeading from '.dummies/SectionHeading'
import Button from '.dummies/Button/LinkBtn'

import S from './styles/greatCases.module.css'

function GreatCases() {
	return (
		<section className={`${S.section} pt-40`}>
			<div className={S.container}>
				<SectionHeading title='great cases_' />
			</div>
			<GreatCasesCarouselDynamic />
			<Button href='/cases' title='View all cases' variant='basic'>
				View all cases
			</Button>
		</section>
	)
}

export default GreatCases
