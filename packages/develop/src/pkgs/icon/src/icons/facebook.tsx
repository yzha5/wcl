import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="7.5" stroke={color} strokeLinejoin="round"/>
<path d="M5.5 9H10.5M10.5 5H10C8.89543 5 8 5.89543 8 7V15.5" stroke={color} strokeLinejoin="round"/>
</svg>)}
