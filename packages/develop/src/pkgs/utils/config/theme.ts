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

const lightPalette: Palette = {
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
}
const darkPalette: Palette = {
    text: '#CFE6FC',
    background: '#042443',
    primary: '#77B8F8',
    success: '#77F8B8',
    warn: '#F8B877',
    error: '#F877B8',
    gray: '#B8B8B8',
    placeholder: '#BFBFBF',
    disabled: '#333',
    disabledBg: '#141414',
}
const breakpoints: Breakpoints = {
    xs: 480,
    sm: 640,
    md: 1024,
    lg: 1366,
    xl: 1920,
    '4k': 3840,
}

export const lightTheme: Theme = {
    mode: 'light',
    palette: lightPalette,
    breakpoints,
}
export const darkTheme: Theme = {
    mode: 'dark',
    palette: darkPalette,
    breakpoints,
}
