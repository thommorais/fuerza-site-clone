import Image from 'next/image'

import Grid from '.dummies/Grid'
import Stars from './Stars'

import S from './styles/illustration.module.css'

function Illustration({ showHands = false }: { showHands?: boolean }) {
	return (
		<>
			<Stars />
			<figure className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${S.allContainer}`}>
				<Grid />
				<div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${S.container}`}>
					<i className={`${S.ring} absolute top-1/2 left-1/2`} />
					<i className={`${S.ring} absolute top-1/2 left-1/2`} />
					<i className={`${S.ring} absolute top-1/2 left-1/2`} />
					<i className={`${S.ring} absolute top-1/2 left-1/2`}>
						<i className={`${S.ringAnimatedParent} absolute h-full w-full left-1/2 top-1/2`}>
							<i className={`${S.ringAnimated}`} />
						</i>
						<i className={`${S.ringAnimatedParent} absolute h-full w-full left-1/2 top-1/2`}>
							<i className={`${S.ringAnimated}`} />
						</i>
						<i className={`${S.ringAnimatedParent} absolute h-full w-full left-1/2 top-1/2`}>
							<i className={`${S.ringAnimated}`} />
						</i>
						<i className={`${S.ringAnimatedParent} absolute h-full w-full left-1/2 top-1/2`}>
							<i className={`${S.ringAnimated} ${S.ringSizedUp}`} />
						</i>
					</i>

					{showHands ? (
						<>
							<Image
								priority
								src='https://www.fuerzastudio.com.br/wp-content/themes/fuerza/resources/img/top-hand.png'
								width={522}
								height={247}
								alt='illustration'
								className={`${S.hand} ${S.topHand}`}
							/>
							<Image
								priority
								src='https://www.fuerzastudio.com.br/wp-content/themes/fuerza/resources/img/top-hand-cut.png'
								width={369}
								height={244}
								alt='illustration'
								className={`${S.hand} ${S.topHand} ${S.topHandCut}`}
							/>
							<Image
								priority
								src='https://www.fuerzastudio.com.br/wp-content/themes/fuerza/resources/img/bottom-hand.png'
								width={593}
								height={203}
								alt='illustration'
								className={`${S.hand} ${S.bottomHand}`}
							/>
							<Image
								priority
								src='https://www.fuerzastudio.com.br/wp-content/themes/fuerza/resources/img/bottom-hand-cut.png'
								width={592}
								height={203}
								alt='illustration'
								className={`${S.hand} ${S.bottomHand} ${S.bottomHandCut}`}
							/>
						</>
					) : null}
				</div>

				<Image
					priority
					src='https://www.fuerzastudio.com.br/wp-content/themes/fuerza/resources/img/fuerza-brand.png'
					className={`${S.illustrationBrand} absolute top-1/2 left-1/2`}
					alt='Illustration brand'
					width={375}
					height={366}
				/>
				{showHands ? (
					<Image
						priority
						src='https://www.fuerzastudio.com.br/wp-content/themes/fuerza/resources/img/pedra.png'
						className={`${S.rock} absolute`}
						alt='Illustration brand'
						width={669}
						height={370}
					/>
				) : null}
			</figure>
		</>
	)
}

export default Illustration
