import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2H16" stroke={color} strokeLinejoin="round"/>
<path d="M3 6H16" stroke={color} strokeLinejoin="round"/>
<path d="M3 10H16" stroke={color} strokeLinejoin="round"/>
<path d="M3 14H16" stroke={color} strokeLinejoin="round"/>
<path d="M0 6H1" stroke={color} strokeLinejoin="round"/>
<path d="M0 10H1" stroke={color} strokeLinejoin="round"/>
<path d="M0 14H1" stroke={color} strokeLinejoin="round"/>
</svg>)}
