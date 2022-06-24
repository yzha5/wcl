import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (
        <svg width='100%' height='100%' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <line y1='2' x2='16' y2='2' stroke={color} strokeLinejoin='round' />
            <line x1='4' y1='6' x2='12' y2='6' stroke={color} strokeLinejoin='round' />
            <line y1='10' x2='16' y2='10' stroke={color} strokeLinejoin='round' />
            <line x1='4' y1='14' x2='12' y2='14' stroke={color} strokeLinejoin='round' />
        </svg>
    )
}
