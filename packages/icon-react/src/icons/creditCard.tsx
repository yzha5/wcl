import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="2.5" width="15" height="11" rx="2" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 6.5H15.5M2 10.5H7M11 10.5H14" stroke={color} strokeLinejoin="round"/>
</svg>)}
