import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.5 4H7.66026C8.82796 4 9.93736 4.65604 10.6973 5.79593L15.5 13H0.5V4Z" stroke={color} strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2 5.92859H5.5H7.67157C8.20201 5.92859 8.71071 6.19951 9.08579 6.68174L11 9.14287H5.5H2V5.92859Z" stroke={color} strokeLinejoin="round"/>
<path d="M5.5 5.92859V9.14287" stroke={color} strokeLinejoin="round"/>
</svg>)}
