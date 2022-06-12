export type Mode = 'light' | 'dark'

export interface Breakpoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
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
        xs: 0,
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0,
        xxl: 0,
    },
}
