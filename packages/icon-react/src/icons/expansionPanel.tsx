import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="15" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M1 2H15" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="9" width="15" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M1 10H15" stroke={color} strokeLinejoin="round"/>
</svg>)}
