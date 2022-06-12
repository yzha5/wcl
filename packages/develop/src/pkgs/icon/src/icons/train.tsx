import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2.5V6.5" stroke={color} strokeLinejoin="round"/>
<path d="M2.5 12.5L0.5 15.5" stroke={color} strokeLinejoin="round"/>
<path d="M13.5 12.5L15.5 15.5" stroke={color} strokeLinejoin="round"/>
<path d="M1.5 14H14.5" stroke={color} strokeLinejoin="round"/>
<rect x="2.5" y="0.5" width="11" height="11" rx="1" stroke={color} strokeLinejoin="round"/>
<rect x="4" y="2.5" width="8" height="4" rx="1" stroke={color} strokeLinejoin="round"/>
<circle cx="5" cy="9" r="1" stroke={color} strokeLinejoin="round"/>
<circle cx="11" cy="9" r="1" stroke={color} strokeLinejoin="round"/>
</svg>)}
