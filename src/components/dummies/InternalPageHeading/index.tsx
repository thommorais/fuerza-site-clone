import S from './styles/heading.module.css'

function InternalPageHeading({ title }: { title: string }) {
	return <h2 className={`${S.heading} text-center`}>{title}_</h2>
}

export default InternalPageHeading
