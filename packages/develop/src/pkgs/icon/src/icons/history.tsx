import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C10.878 0.5 13.3775 2.1211 14.635 4.5" stroke={color} strokeLinejoin="round"/>
<path d="M15 1V4.5H11.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 2V8L11 11" stroke={color} strokeLinejoin="round"/>
</svg>)}
