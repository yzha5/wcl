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
                return theme.palette.primary
            case 'success':
                return theme.palette.success
            case 'warn':
                return theme.palette.warn
            case 'error':
                return theme.palette.error
            default:
                return color
        }
    } else {
        return undefined
    }
}

export function textColor(color?: string): string | undefined {
    if (color) {
        return Color(color).isDark() ? 'white' : 'black'
    } else {
        return undefined
    }
}
