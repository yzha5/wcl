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
    error: string
    warn: string
    success: string
    info: string
    gray: string
    placeholder: string
    disabled: { text: string; border: string; bg: string }
    border: string
    borderActive: string
}

export interface Theme {
    mode: Mode
    palette: Palette
    breakpoints: Breakpoints
}
