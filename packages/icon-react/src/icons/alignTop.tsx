import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="16" y2="0.5" stroke={color} strokeLinejoin="round"/>
<rect x="9.5" y="2.5" width="3" height="13" stroke={color} strokeLinejoin="round"/>
<rect x="3.5" y="2.5" width="3" height="6" stroke={color} strokeLinejoin="round"/>
</svg>)}
