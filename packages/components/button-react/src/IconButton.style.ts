import styled from '@emotion/styled'
import Color from 'color'
import { componentColor, textColor } from '@wdkx/component-tools-react'
import { lightTheme, Theme } from '@wdkx/theme-react'
import { IconButtonStyleProps } from './IconButton.types'

//默认按钮计算的高度为36px
const baseSize = 36
export default styled.button<IconButtonStyleProps>(
    ({ color, size = baseSize, radius, face = 'filled', disabled, theme }) => {
        const t: Theme = theme.palette ? theme : lightTheme
        const c = componentColor(color, t)
        const gray = t.palette.gray
        const border = color
            ? face == 'outlined'
                ? `solid 0.0625em ${disabled ? t.palette.disabled.border : c}`
                : 'none'
            : face != 'link'
            ? `solid 0.0625em ${disabled ? t.palette.disabled.border : gray}`
            : 'none'
        const backgroundColor = disabled
            ? t.palette.disabled.bg
            : face == 'filled' && color != undefined
            ? c
            : 'transparent'
        const tc = disabled
            ? t.palette.disabled.text
            : face == 'filled'
            ? textColor(c) ?? 'inherit'
            : face == 'outlined'
            ? c
            : 'inherit'
        return {
            label: 'icon-button',
            cursor: disabled ? 'not-allowed' : 'pointer',
            height: size,
            fontSize: `${size / baseSize}rem`,
            outline: 'none',
            borderRadius: `${radius ?? 2}px`,
            border,
            padding: '0.625em',
            backgroundColor,
            color: tc,
            '&:hover:not(:disabled)': {
                boxShadow: `0 0.5em 4em 0 ${Color(color ? c : gray).alpha(
                    0.48
                )},0 0.25em 0.5em 0 ${Color(color ? c : gray).alpha(0.32)}`,
            },
            '&>.ripple--container span': {
                backgroundColor: color ? (face == 'filled' ? textColor(c) : c) : gray,
            },
        }
    }
)
