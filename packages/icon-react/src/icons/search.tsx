import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="6.5" stroke={color}/>
<path d="M11.5 11.5L15.5 15.5" stroke={color}/>
</svg>)}
