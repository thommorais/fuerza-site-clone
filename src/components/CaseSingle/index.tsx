import ReactPlayerWrapper from '.dummies/ReactPlayerWrapper'
import ThumbNailsCarousel from './ThumbnailsCarousel'
import CaseContent from './CaseContent'
import MoreCases from './MoreCases'

import type { Casetype } from './types'
import S from './styles/case.module.css'

function CaseSingle({ caseData }: { caseData: Casetype }) {
	return (
		<main>
			{caseData?.videoURL && (
				<div style={{ paddingTop: '37.5%' }} className={` relative ${S.video}`}>
					<div className='absolute inset-0'>
						<ReactPlayerWrapper height='100%' url={caseData.videoURL} />
					</div>
				</div>
			)}

			<ThumbNailsCarousel caseData={caseData} />
			<CaseContent caseData={caseData} />
			<MoreCases caseData={caseData} />
		</main>
	)
}

export default CaseSingle
