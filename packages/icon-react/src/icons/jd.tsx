import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.5H8" stroke={color} strokeLinejoin="round"/>
<path d="M8 4.5H16" stroke={color} strokeLinejoin="round"/>
<path d="M4 3.5V4.5" stroke={color} strokeLinejoin="round"/>
<path d="M7.5 6H0.5V8H7.5V6Z" stroke={color} strokeLinejoin="round"/>
<path d="M4 8V11C4 11.5523 3.55228 12 3 12H2.5" stroke={color} strokeLinejoin="round"/>
<path d="M2 9L0.5 12" stroke={color} strokeLinejoin="round"/>
<path d="M10 9L8.5 12" stroke={color} strokeLinejoin="round"/>
<path d="M6 9L7.5 12" stroke={color} strokeLinejoin="round"/>
<path d="M14 9L15.5 12" stroke={color} strokeLinejoin="round"/>
<path d="M11 3.5L9 8H15.5" stroke={color} strokeLinejoin="round"/>
<path d="M12 6V11C12 11.5523 11.5523 12 11 12H10.5" stroke={color} strokeLinejoin="round"/>
</svg>)}
