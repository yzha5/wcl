import styled from '@emotion/styled'
import Color from 'color'
import { componentColor, lightTheme, textColor, Theme } from '../../../utils'
import { ButtonStyleProps } from './Button.types'

//默认按钮计算的高度为36px
const baseSize = 36

export default styled.button<ButtonStyleProps>(
    ({ color, size = baseSize, radius, face = 'filled', hasSecondaryText, disabled, theme }) => {
        const t: Theme = theme.palette ? theme : lightTheme
        const c = componentColor(color, t)
        const gray = t.palette.gray
        const border = color
            ? face == 'outlined'
                ? `solid 0.0625em ${disabled ? t.palette.disabled : c}`
                : 'none'
            : face != 'link'
            ? `solid 0.0625em ${disabled ? t.palette.disabled : gray}`
            : 'none'
        const backgroundColor = disabled
            ? t.palette.disabledBg
            : face == 'filled' && color != undefined
            ? c
            : 'transparent'
        const tc = disabled
            ? t.palette.disabled
            : face == 'filled'
            ? textColor(c) ?? 'inherit'
            : face == 'outlined'
            ? c
            : 'inherit'
        return {
            label: 'button',
            textTransform: 'uppercase',
            userSelect: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            height: hasSecondaryText ? undefined : size,
            fontSize: `${size / baseSize}rem`,
            outline: 'none',
            borderRadius: `${radius ?? 2}px`,
            border,
            padding: '0.5em 1em',
            backgroundColor,
            color: tc,
            '&>.wdkx-button-content': {
                textAlign: 'left',
                lineHeight: '1.25em',
                '&>.wdkx-button-content-text': {
                    fontWeight: 500,
                    fontSize: '0.875em',
                },
                '&>.wdkx-button-content-secondary-text': {
                    fontSize: '0.75em',
                },
            },
            '&:hover:not(:disabled)': {
                boxShadow: `0 0.5em 4em 0 ${Color(color ? c : gray).alpha(0.48)},0 0.25em 0.5em 0 ${Color(
                    color ? c : gray
                ).alpha(0.32)}`,
            },
            '&>.ripple--container span': {
                backgroundColor: color ? (face == 'filled' ? textColor(c) : c) : gray,
            },
            '&>*:not(.ripple--container):not(:first-of-type)': {
                marginLeft: `0.5em`,
            },
        }
    }
)
