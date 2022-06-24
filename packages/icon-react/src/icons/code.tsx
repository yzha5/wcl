import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4.5L0.5 8L4 11.5M12 4.5L15.5 8L12 11.5M10.5 2.5L5.5 13.5" stroke={color} strokeLinejoin="round"/>
</svg>)}
