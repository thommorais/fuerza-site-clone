import Cube from './Cube'
import SolvingProblems from './SolvingProblems'
import GreateClients from './GreatClients'
import GreatCases from './GreateCases'
import Team from './Team'

import S from './styles/main.module.css'

function HomeMain() {
	return (
		<main className={S.main}>
			<Cube />
			<SolvingProblems />
			<GreateClients />
			<GreatCases />
			<Team />
		</main>
	)
}

export default HomeMain
