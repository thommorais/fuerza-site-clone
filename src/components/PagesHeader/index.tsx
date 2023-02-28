import HeaderIllustration from '.dummies/HeaderIllustration'
import S from './styles/header.module.css'

import PageTitleShuffle from '.components/dummies/PageTitleShuffle'

function PagesHeader({ pageTitle }: { pageTitle: string }) {
	return (
		<header className={`${S.header} relative`}>
			<HeaderIllustration />

			<div className='absolute top-0 left-0 w-full h-full grid place-items-center'>
				<h1 className={`${S.pageTitle}`}>
					<PageTitleShuffle text={pageTitle} />
				</h1>
			</div>
		</header>
	)
}

export default PagesHeader
