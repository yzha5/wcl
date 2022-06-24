import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="2" width="15" height="12" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M3 5L6 8L3 11M7.5 11H13" stroke={color} strokeLinejoin="round"/>
</svg>)}
