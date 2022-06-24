import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7L11.5 2.5H4.5L6 7M10 7V15.5H6V7M10 7H6M8 9V10.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 1.5V0M10 1.5L10.5 0.5M6 1.5L5.5 0.5" stroke={color} strokeLinejoin="round"/>
</svg>)}
