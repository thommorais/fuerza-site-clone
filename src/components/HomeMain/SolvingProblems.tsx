import Image from 'next/image'
import S from './styles/solvingProblems.module.css'

function SolvingProblems() {
	return (
		<section className='solving-problems'>
			<div className={S.container}>
				<h2 className={S.heading}>
					More than a decade creating solutions in{' '}
					<span
						data-prefix=''
						data-words='Design|Web|Apps|UX Design|Frontend Development|Backend Development|Motion|Illustration|Copywriting|Branding|UI Design'
						className='writing-ready'
					/>
					<br />
					{"That's our strength, with numbers and global reach to back it up_"}
				</h2>
			</div>
			<div className='map'>
				<div className={S.container}>
					<h4 className={S.countriesCount}>
						<strong id='countup'>20+</strong>
						<small>countries</small>
					</h4>
				</div>

				<div className={`relative mx-auto ${S.mapIllustration}`}>
					<Image
						alt='Fuerza Studio around world map'
						className='w-full h-auto opacity-30'
						src='https://www.fuerzastudio.com.br/wp-content/themes/fuerza/resources/img/mapGrid.svg'
						width={1519}
						height={863}
					/>
					<svg className='pins absolute top-0 left-0 w-full h-auto' viewBox='0 0 1519.048 862.601'>
						<path
							strokeWidth='3'
							d='M307.067 255.81c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.82-13-13-13zm0 15.982a3.516 3.516 0 1 1 .001-7.031 3.516 3.516 0 0 1-.001 7.031zM341.912 352.31c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.821-13-13-13zm0 15.982a3.516 3.516 0 1 1 .001-7.031 3.516 3.516 0 0 1-.001 7.031zM382.912 441.074c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.821-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM540.412 567.074c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.821-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM506.412 624.074c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.821-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM471.412 624.073c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.821-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM696.75 352.561c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.82-13-13-13zm0 15.982a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM720 318.277c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM707 275.027c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM754.761 302.777c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM771.132 335.951c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM829.486 343.048c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.82-13-13-13zm0 15.982a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM870.986 406.706c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.82-13-13-13zm0 15.982a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM1004.736 423.456c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.82-13-13-13zm0 15.982a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM1072.08 425.61c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.821-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM1106.353 455.11c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM1101.378 387.774c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM1186.277 359.858c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM1223.934 360.145c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.18-5.82-13-13-13zm0 15.982a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03zM1032.267 221.522c-7.18 0-13 5.82-13 13 0 7.678 13 22.504 13 22.504s13-14.256 13-22.504c0-7.179-5.82-13-13-13zm0 15.983a3.516 3.516 0 0 1 0-7.03 3.516 3.516 0 0 1 0 7.03z'
						></path>
					</svg>
				</div>
			</div>
			<div className={S.container}>
				<div className={S.numberContainers}>
					<div className={S.number}>
						<strong data-number='19' data-suffix=''>
							19
						</strong>
						<small className={`block`}>languages</small>
					</div>
					<div className={S.number}>
						<strong data-number='164' data-suffix=''>
							164
						</strong>
						<small className={`block`}>clients</small>
					</div>
					<div className={S.number}>
						<strong data-number='389' data-suffix=''>
							389
						</strong>
						<small className={`block`}>web projects</small>
					</div>
					<div className={S.number}>
						<strong data-number='2000' data-suffix='+'>
							2000+
						</strong>
						<small className={`block`}>illustrations</small>
					</div>
					<div className={S.number}>
						<strong data-number='10000' data-suffix='+'>
							10000+
						</strong>
						<small className={`block`}>web banners</small>
					</div>
					<div className={S.number}>
						<strong data-number='6000' data-suffix='+'>
							6000+
						</strong>
						<small className={`block`}>app pages</small>
					</div>
					<div className={S.number}>
						<strong data-number='900' data-suffix='+'>
							900+
						</strong>
						<small className={`block`}>pages</small>
					</div>
					<div className={S.number}>
						<strong data-number='2000' data-suffix='+'>
							2000+
						</strong>
						<small className={`block`}>blog posts</small>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SolvingProblems
