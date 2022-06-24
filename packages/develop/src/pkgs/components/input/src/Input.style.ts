import styled from '@emotion/styled'
import { componentColor, darkColor, lightColor, lightTheme, Theme } from '../../../utils'
import { InputStyleProps } from './Input.types'

const defaultSize = 36

export const StyledInputRoot = styled.div<InputStyleProps & { hasLabel: boolean }>(
    ({ color, inlineLabel, hasLabel, disabled, size = defaultSize, theme }) => {
        const t = theme.palette ? theme : lightTheme
        const c = componentColor(color, t)
        return {
            label: 'input-root',
            fontSize: `${size / defaultSize}rem`,
            color: disabled ? t.palette.disabled.text : 'inherit',
            '&>label': inlineLabel
                ? {
                      display: 'flex',
                      alignItems: 'center',
                      '&>div': hasLabel && {
                          marginLeft: `${size / defaultSize}rem`,
                      },
                  }
                : {
                      '&>div': hasLabel && { marginTop: `${(size * 0.5) / defaultSize}rem` },
                  },
            '&>label>span': {
                fontWeight: 500,
            },
        }
    }
)

export const StyledInputContainer = styled.div<InputStyleProps>(
    ({ color, size = defaultSize, radius, disabled, theme }) => {
        const t: Theme = theme.palette ? theme : lightTheme
        const c = componentColor(color, t)
        return {
            label: 'input-container',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: size,
            cursor: disabled ? 'not-allowed' : 'text',
            border: `solid ${(size * 0.0625) / defaultSize}rem ${
                disabled
                    ? t.palette.disabled.border
                    : c
                    ? lightColor(c, t.mode == 'dark')
                    : t.palette.border
            }`,
            backgroundColor: disabled ? t.palette.disabled.bg : undefined,
            borderRadius: radius ?? `${(size * 0.125) / defaultSize}rem`,
            padding: `0 ${(size * 0.5) / defaultSize}rem`,
            '&>*:not(:first-of-type)': {
                marginLeft: `${(size * 0.5) / defaultSize}rem`,
            },
            '&:hover,&:focus-within': !disabled && {
                borderColor: c ? c : t.palette.borderActive,
            },
            '&>div': {
                display: 'flex',
                height: '1em',
                userSelect: 'none',
                color: disabled ? t.palette.disabled.text : 'inherit',
            },
        }
    }
)
export const StyledInput = styled.input<InputStyleProps>(
    ({ size = defaultSize, disabled, theme }) => {
        const t = theme.palette ? theme : lightTheme
        return {
            label: 'input',
            flexGrow: 1,
            width: '100%',
            fontSize: '.875em',
            cursor: disabled ? 'not-allowed' : 'text',
            height: '100%',
            padding: 0,
            marginLeft: `${(size * 0.5) / defaultSize}rem`,
            border: 'none',
            outline: 'none',
            backgroundColor: 'unset',
            color: disabled ? t.palette.disabled.text : 'inherit',
            '&::placeholder': {
                color: t.palette.placeholder,
            },
        }
    }
)
