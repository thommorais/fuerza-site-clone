import Cube from './Cube'
import SolvingProblems from './SolvingProblems'
import GreateClients from './GreatClients'

import S from './styles/main.module.css'

function HomeMain() {
	return (
		<main className={S.main}>
			<Cube />
			<SolvingProblems />
			<GreateClients />
		</main>
	)
}

export default HomeMain
