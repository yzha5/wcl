import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="3.5" width="6" height="3" stroke={color} strokeLinejoin="round"/>
<rect x="2" y="9.5" width="13" height="3" stroke={color} strokeLinejoin="round"/>
<path d="M8 0V3.5M8 6.5V9.5M8 12.5V16" stroke={color} strokeLinejoin="round"/>
</svg>)}
