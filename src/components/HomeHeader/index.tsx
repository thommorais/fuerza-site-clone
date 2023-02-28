import HeaderIllustration from '.dummies/HeaderIllustration'
import S from './styles/header.module.css'

import PageTitleShuffle from '.components/dummies/PageTitleShuffle'

function HomeHeader() {
	return (
		<header className={S.container}>
			<HeaderIllustration showHands />
			<h1 className={`absolute left-1/2 z-9 m-0 p-0 w-screen text-center ${S.copy}`}>
				<PageTitleShuffle text={'change is inevitable_'} />
			</h1>
		</header>
	)
}

export default HomeHeader
