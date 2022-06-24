import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (
        <svg width='100%' height='100%' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='3.5' y='2' width='3' height='12' stroke={color} strokeLinejoin='round' />
            <rect x='9.5' y='2' width='3' height='12' stroke={color} strokeLinejoin='round' />
            <path d='M0 0.5H16' stroke={color} strokeLinejoin='round' strokeDasharray='1 1' />
            <path d='M0 15.5H16' stroke={color} strokeLinejoin='round' strokeDasharray='1 1' />
        </svg>
    )
}
