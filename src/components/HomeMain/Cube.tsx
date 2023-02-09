import S from './styles/cube.module.css'

function Cube() {
	return (
		<div className={`${S.surface} relative`}>
			<h1 className={`${S.copy} relative `}>
				so change <span>to last_</span>
			</h1>
			<div className={S.surfaceShadow} />
		</div>
	)
}

export default Cube
