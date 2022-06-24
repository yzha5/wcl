import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 3.5C0.5 2.94772 0.947715 2.5 1.5 2.5H14.5C15.0523 2.5 15.5 2.94772 15.5 3.5V9.5C15.5 10.0523 15.0523 10.5 14.5 10.5H7.03518C6.70083 10.5 6.3886 10.6671 6.20313 10.9453L4.5 13.5L2.79687 10.9453C2.6114 10.6671 2.29917 10.5 1.96482 10.5H1.5C0.947715 10.5 0.5 10.0523 0.5 9.5V3.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M3 5H12M3 8H7" stroke={color} strokeLinejoin="round"/>
</svg>)}
