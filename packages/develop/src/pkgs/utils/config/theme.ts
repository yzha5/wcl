export type Mode = 'light' | 'dark'

export interface Breakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    '4k': number
}

export interface Palette {
    text: string
    background: string
    primary: string
    success: string
    warn: string
    error: string
    gray: string
    placeholder: string
    disabled: string
    disabledBg: string
}

export interface Theme {
    mode: Mode
    palette: Palette
    breakpoints: Breakpoints
}

export const lightTheme: Theme = {
    mode: 'light',
    palette: {
        text: '#031A30',
        background: '#fff',
        primary: '#0D80F2',
        success: '#0DF280',
        warn: '#F2800D',
        error: '#F20D80',
        gray: '#808080',
        placeholder: '#BFBFBF',
        disabled: '#ccc',
        disabledBg: '#ebebeb',
    },
    breakpoints: {
        xs: 480,
        sm: 640,
        md: 1024,
        lg: 1366,
        xl: 1920,
        '4k': 3840,
    },
}
