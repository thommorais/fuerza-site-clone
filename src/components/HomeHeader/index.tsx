import HeaderIllustration from '.dummies/HeaderIllustration'
import S from './styles/header.module.css'

function HomeHeader() {
	return (
		<header className={S.container}>
			<HeaderIllustration showHands />
			<h1 className={`absolute left-1/2 z-9 m-0 p-0 w-screen text-center ${S.copy}`}>
				<div className='type-shuffle'>change is inevitable_</div>
			</h1>
		</header>
	)
}

export default HomeHeader
