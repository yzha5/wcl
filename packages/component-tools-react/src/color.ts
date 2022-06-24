import { IColor } from './types'
import { Theme } from '@wdkx/theme-react'
import Color from 'color'
/*
 * 转换组件尺寸
 */
export function componentColor(color: IColor | undefined, theme: Theme): string | undefined {
    if (color) {
        switch (color) {
            case 'primary':
            case 'error':
            case 'warn':
            case 'success':
            case 'info':
            case 'gray':
                return theme.palette[color]
            default:
                return color
        }
    } else {
        return undefined
    }
}

// 组件浅色
export function lightColor(color: string, isDark: boolean = false) {
    if (isDark) {
        return Color(color).mix(Color('black'), 0.48).toString()
    } else {
        return Color(color).mix(Color('white'), 0.64).toString()
    }
}

// 组件深色
export function darkColor(color: string, isDark: boolean = false) {
    if (isDark) {
        return Color(color).mix(Color('white'), 0.4).toString()
    } else {
        return Color(color).mix(Color('black'), 0.4).toString()
    }
}

export function textColor(color?: string): string | undefined {
    if (color) {
        return Color(color).isDark() ? 'white' : 'black'
    } else {
        return undefined
    }
}
