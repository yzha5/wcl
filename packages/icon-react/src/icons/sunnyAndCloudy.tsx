import { IconProps } from '../types'

export default function ({ color = 'currentColor' }: IconProps) {
    return (
        <svg width='100%' height='100%' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.5 2V3' stroke={color} strokeLinejoin='round' />
            <path d='M15 5.5H16' stroke={color} strokeLinejoin='round' />
            <path d='M14.9749 3.02515L14.2678 3.73225' stroke={color} strokeLinejoin='round' />
            <path d='M14.2678 7.26782L14.9749 7.97493' stroke={color} strokeLinejoin='round' />
            <path d='M10.0251 3.02515L10.7322 3.73225' stroke={color} strokeLinejoin='round' />
            <path
                d='M3.71846 7.23602C4.24069 5.36498 5.87235 4 7.80435 4C10.1576 4 12.0652 6.02505 12.0652 8.52308C13.4099 8.52308 14.5 9.68025 14.5 11.1077C14.5 12.5351 13.4099 13.6923 12.0652 13.6923H3.54348C1.86261 13.6923 0.5 12.2458 0.5 10.4615C0.5 8.67723 1.86261 7.23077 3.54348 7.23077C3.60221 7.23077 3.66055 7.23254 3.71846 7.23602ZM3.71846 7.23602C4.89111 7.30658 5.88617 8.08188 6.33371 9.16923'
                stroke={color}
                strokeLinejoin='round'
            />
            <path
                d='M11 5.5C11 4.67157 11.6716 4 12.5 4C13.3284 4 14 4.67157 14 5.5C14 6.32843 13.3284 7 12.5 7C12.3247 7 12.1564 6.96992 12 6.91465'
                stroke={color}
                strokeLinejoin='round'
            />
        </svg>
    )
}
