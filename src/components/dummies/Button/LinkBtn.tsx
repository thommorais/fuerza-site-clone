import { HTMLAttributes } from 'react'

import classNames from '.utils/classnames'
import S from './styles/button.module.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string
	primary?: boolean
	variant?: 'primary' | 'basic' | 'danger' | 'ghost' | 'bordeless'
	variants?: ('primary' | 'basic' | 'danger' | 'ghost' | 'bordeless')[]
	size?: 'large' | 'medium' | 'small'
	href?: string
	target?: string
	rel?: string
	title?: string
}

function Button(props: ButtonProps) {
	const { variant, variants, size, primary, className, href, target, rel, title } = props

	const classes = classNames(
		{
			[S.basic]: variant === 'basic' || variants?.includes('basic'),
			[S.primary]: variant === 'primary' || primary || variants?.includes('primary'),
			[S.danger]: variant === 'danger' || variants?.includes('danger'),
			[S.ghost]: variant === 'ghost' || variants?.includes('ghost'),
			[S.bordeless]: variant === 'bordeless' || variants?.includes('bordeless'),
			[S.default]: variant === 'basic',
			[S.large]: size === 'large',
			[S.medium]: size === 'medium',
			[S.small]: size === 'small',
			[S.button]: true,
		},
		[className],
	)

	return (
		<a href={href} target={target} rel={rel} title={title} className={`${classes}`}>
			{props.children}
		</a>
	)
}

export default Button
