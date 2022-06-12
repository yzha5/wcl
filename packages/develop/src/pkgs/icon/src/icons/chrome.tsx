import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="7.5" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="8" r="3.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 4.5H14.5" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="8.00002" r="3.5" transform="rotate(120 8 8.00002)" stroke={color} strokeLinejoin="round"/>
<path d="M11.0311 9.75L7.78109 15.3792" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="7.99998" r="3.5" transform="rotate(-120 8 7.99998)" stroke={color} strokeLinejoin="round"/>
<path d="M4.96891 9.75L1.71891 4.12083" stroke={color} strokeLinejoin="round"/>
</svg>)}
