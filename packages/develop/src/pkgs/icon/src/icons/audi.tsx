import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.75" cy="8" r="2.375" stroke={color} strokeWidth="0.75"/>
<circle cx="6.25" cy="8" r="2.375" stroke={color} strokeWidth="0.75"/>
<circle cx="9.75" cy="8" r="2.375" stroke={color} strokeWidth="0.75"/>
<circle cx="13.25" cy="8" r="2.375" stroke={color} strokeWidth="0.75"/>
</svg>)}
