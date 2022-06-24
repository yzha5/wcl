import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="4" r="2" stroke={color} strokeLinejoin="round"/>
<path d="M15.5 3.5V2H6.5V7.5M6.5 14.5V7.5M6.5 7.5H12.5" stroke={color} strokeLinejoin="round"/>
</svg>)}
