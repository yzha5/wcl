import styled from '@emotion/styled'
import { componentColor, lightColor, lightTheme, Theme } from '../../../utils'
import { InputBoxStyleProps } from './InputBox.types'

const defaultSize = 56
export const StyledInputBoxRoot = styled.label<InputBoxStyleProps>(
    ({ size = defaultSize, radius, disabled, color, theme }) => {
        const t: Theme = theme.palette ? theme : lightTheme
        const c = componentColor(color, t)
        return {
            label: 'root',
            display: 'flex',
            alignItems: 'center',
            height: size,
            padding: `${(size * 8) / defaultSize}px ${(size * 16) / defaultSize}px`,
            border: `solid ${size / defaultSize}px ${
                disabled
                    ? t.palette.disabled.border
                    : color
                    ? lightColor(c, t.mode == 'dark')
                    : t.palette.border
            }`,
            '&:hover,&:focus-within': !disabled && {
                borderColor: color ? c : t.palette.borderActive,
            },
            borderRadius: radius ?? (size * 2) / defaultSize,
            '&::placeholder': {
                color: t.palette.placeholder,
            },
            fontSize: `${size / defaultSize}rem`,
            '&>.input-box-icon': {
                height: '1em',
            },
            '&>*:not(:first-of-type)': {
                marginLeft: `${(size * 8) / defaultSize}px`,
            },
            color: disabled ? t.palette.disabled.text : 'inherit',
            backgroundColor: disabled ? t.palette.disabled.bg : undefined,
            cursor: disabled ? 'not-allowed' : 'text',
        }
    }
)
export const StyledInputBoxContainer = styled.div<{ size?: number }>(({ size, theme }) => {
    return {
        label: 'input-container',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '&>span': {
            fontSize: `${(size * 14) / defaultSize}px`,
            fontWeight: 500,
            lineHeight: `${(size * 18) / defaultSize}px`,
            userSelect: 'none',
        },
    }
})
export const StyledInput = styled.input<{ size?: number }>(({ size, disabled, theme }) => {
    return {
        label: 'input',
        flexGrow: 1,
        backgroundColor: 'unset',
        display: 'block',
        width: '100%',
        border: 'none',
        outline: 'none',
        padding: 0,
        color: 'inherit',
        fontSize: `${(size * 14) / defaultSize}px`,
        lineHeight: `${(size * 20) / defaultSize}px`,
        cursor: disabled ? 'not-allowed' : 'text',
    }
})
