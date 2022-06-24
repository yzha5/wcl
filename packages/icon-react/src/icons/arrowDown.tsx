import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="8" x2="8" y2="15" stroke={color} strokeLinejoin="round"/>
<path d="M5 12L8 15L11 12" stroke={color} strokeLinejoin="round"/>
</svg>)}
