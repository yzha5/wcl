import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="7.5" stroke={color}/>
<path d="M11 1L8 7L5 1M1.5 4.5L6 13L8 8.5L10 13L14.5 4.5" stroke={color} strokeLinejoin="round"/>
</svg>)}
