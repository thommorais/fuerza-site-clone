import { HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

import classNames from '.utils/classnames'
import S from './styles/button.module.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
	className?: string
	primary?: boolean
	variant?: 'primary' | 'basic' | 'danger' | 'ghost' | 'bordeless'
	variants?: ('primary' | 'basic' | 'danger' | 'ghost' | 'bordeless')[]
	size?: 'large' | 'medium' | 'small'
}

function Button(props: ButtonProps) {
	const { variant, variants, size, primary, className, asChild, ...restProps } = props

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

	const Comp = asChild ? Slot : 'button'

	return (
		<Comp {...restProps} className={`${classes}`}>
			{props.children}
		</Comp>
	)
}

export default Button
