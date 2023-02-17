import ReactPlayerWrapper from '.dummies/ReactPlayerWrapper'

import type { Casetype } from './types'

function CaseSingle({ caseData }: { caseData: Casetype }) {
	// eslint-disable-next-line no-console
	console.log({ caseData })

	return (
		<main>
			{caseData?.videoURL && (
				<div style={{ border: '2px solid red' }}>
					<ReactPlayerWrapper url={caseData.videoURL} />
				</div>
			)}
		</main>
	)
}

export default CaseSingle
