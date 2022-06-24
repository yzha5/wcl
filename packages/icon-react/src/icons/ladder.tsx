import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 0.5L4.75 3M3.5 15.5L3.8 12.5M11 0.5L11.25 3M12.5 15.5L12.2 12.5M4.75 3H11.25M4.75 3L4.25 8M11.25 3L11.75 8M4.25 8H11.75M4.25 8L3.8 12.5M11.75 8L12.2 12.5M3.8 12.5H12.2" stroke={color} strokeLinejoin="round"/>
</svg>)}
