import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0.5H5L0.5 5V11L5 15.5H11L15.5 11V5L11 0.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M5 5L11 11M11 5L5 11" stroke={color} strokeLinejoin="round"/>
</svg>)}
