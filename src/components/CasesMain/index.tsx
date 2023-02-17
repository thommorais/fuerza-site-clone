import CaseCard from '.dummies/CaseCard'
import InternalPageHeading from '.dummies/InternalPageHeading'

import S from './styles/main.module.css'

function CasesMain() {
	const cases = [
		{
			title: 'Al Jazeera',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221228185329/thumb_1200x1200-768x768.jpg',
			url: '/cases/al-jazeera-en/',
		},
		{
			title: 'Medal.tv',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221028173206/thumbnail-768x768.jpg',
			url: '/cases/medal-tv-en/',
		},
		{
			title: 'Matrioska',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20221230145852/thumb-1200x1200-1-768x768.jpg',
			url: '/cases/matrioska/',
		},
		{
			title: 'BlueStacks X',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20220218203035/thumbnail-768x768.jpg',
			url: '/cases/bluestacks/',
		},
		{
			title: 'Ready Set',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202200/tile_RS-768x768.jpg',
			url: '/cases/ready-set/',
		},
		{
			title: 'Eurekka',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812212048/thumbnail-3-768x768.jpg',
			url: '/cases/eurekka/',
		},
		{
			title: 'Jam City',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812213149/thumbnail-4-768x768.jpg',
			url: '/cases/jam-city/',
		},
		{
			title: 'OMS',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20211026220024/thumbnail-768x768.jpg',
			url: '/cases/who/',
		},
		{
			title: '8W8',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812211043/thumbnail-2-768x768.jpg',
			url: '/cases/8w8',
		},
		{
			title: 'Branding',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202428/thumb_branding-768x768.jpg',
			url: '/cases/branding-en/',
		},
		{
			title: 'Harry Potter',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202228/HP-768x768.jpg',
			url: '/cases/harry-potter/',
		},
		{
			title: 'Words With Friends',
			image: 'https://fuerza-site-production.s3.amazonaws.com/20210812202252/WWF-768x768.jpg',
			url: '/cases/word-with-friends-en/',
		},
	]

	return (
		<main className={`${S.main} pt-28`}>
			<InternalPageHeading title='these companies have changed and stayed' />

			<div className='grid grid-cols-2 2xl:grid-cols-4 gap-4 px-4 mt-16 mb-4'>
				{cases.map(({ title, image, url }) => (
					<CaseCard key={title} title={title} image={image} url={url} />
				))}
			</div>
		</main>
	)
}

export default CasesMain
