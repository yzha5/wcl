import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4H3L4.5 6.5H1.5L0 4Z" fill={color}/>
<path d="M13 4H16L14.4 6.5H11.5L13 4Z" fill={color}/>
<path d="M11.25 7H14.25L12.65 9.5H9.75L11.25 7Z" fill={color}/>
<path d="M1.75 7H4.75L6.25 9.5H3.25L1.75 7Z" fill={color}/>
<path d="M8 7L9.5 9.5L8 12L6.5 9.5L8 7Z" fill={color}/>
</svg>)}
