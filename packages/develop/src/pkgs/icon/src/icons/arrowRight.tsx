import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8H15" stroke={color} strokeLinejoin="round"/>
<path d="M12 5L15 8L12 11" stroke={color} strokeLinejoin="round"/>
</svg>)}
