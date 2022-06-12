import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 3V13" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 3V13" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 3V13" stroke={color} strokeLinejoin="round"/>
<path d="M8.5 3V13" stroke={color} strokeLinejoin="round"/>
<path d="M13.5 3V13" stroke={color} strokeLinejoin="round"/>
<path d="M15.5 3V13" stroke={color} strokeLinejoin="round"/>
</svg>)}
