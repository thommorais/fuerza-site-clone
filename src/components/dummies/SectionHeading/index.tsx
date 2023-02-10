import S from './styles/sectionHeading.module.css'

function SectionHeading({ title }: { title: string }) {
	return <h2 className={S.heading}>{title}</h2>
}

export default SectionHeading
