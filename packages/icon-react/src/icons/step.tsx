import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="8" r="2" stroke={color} strokeLinejoin="round"/>
<circle cx="9" cy="8" r="1" stroke={color} strokeLinejoin="round"/>
<circle cx="14.5" cy="8" r="1" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 8H8M10 8H13.5" stroke={color} strokeLinejoin="round"/>
</svg>)}
