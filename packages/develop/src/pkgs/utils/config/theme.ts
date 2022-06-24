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

const lightPalette: Palette = {
    text: '#120330',
    background: '#fff',
    primary: '#590DF2',
    error: '#F20D80',
    warn: '#F2800D',
    success: '#0DF280',
    info: '#0D80F2',
    gray: '#808080',
    placeholder: '#B8B8B8',
    disabled: { bg: '#EBEBEB', border: '#ccc', text: '#ccc' },
    border: '#ccc',
    borderActive: '#808080',
}
const darkPalette: Palette = {
    text: '#fff',
    background: '#100C18',
    primary: '#A277F8',
    error: '#F877B8',
    warn: '#F8B877',
    success: '#77F8B8',
    info: '#77B8F8',
    gray: '#B8B8B8',
    placeholder: '#525252',
    disabled: { bg: '#141414', border: '#3D3D3D', text: '#3D3D3D' },
    border: '#8d8d8d',
    borderActive: '#ECE4FE',
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
