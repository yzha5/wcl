import Color from 'color'
import { Theme } from './config/theme'
import { IColor } from './types'

/*
 * 判断是否为对象
 */
function isObj(s: any): boolean {
    return s && typeof s === 'object' && !Array.isArray(s)
}

/*
 * 深度合并对象
 */
export function DeepMerge<T, S>(target: T, source: S) {
    let output: T = Object.assign({}, target)
    if (isObj(source)) {
        Object.keys(source).forEach((key) => {
            if (isObj(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] })
                } else {
                    output[key] = DeepMerge(target[key], source[key])
                }
            } else if (source[key] !== undefined) {
                Object.assign(output, { [key]: source[key] })
            }
        })
    }
    return output
}

/*
 * px 转 rem
 */
export function pxToRem(px: number): number {
    return px / 16
}
export function pxToRems(px: number): string {
    return `${px / 16}rem`
}
export function pxToEm(px: number, baseEm: number, basePx: number): number {
    return (px * baseEm) / basePx
}

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
