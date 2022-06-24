import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.5H16M0 11.5H16M4.5 0V16M11.5 0V16" stroke={color} strokeLinejoin="round"/>
</svg>)}
