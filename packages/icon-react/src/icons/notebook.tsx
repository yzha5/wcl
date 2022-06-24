import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11.5H13.5" stroke={color} strokeLinejoin="round"/>
<path d="M0 13.5H16" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="2" width="15" height="10" rx="1" stroke={color} strokeLinejoin="round"/>
</svg>)}
