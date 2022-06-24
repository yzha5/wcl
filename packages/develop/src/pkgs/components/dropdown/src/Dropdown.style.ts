import styled from '@emotion/styled'
import { componentColor, lightColor, lightTheme, Theme } from '../../../utils'
import { DropdownStyleProps } from './Dropdown.types'

const defaultSize = 36

export const StyledDropdownRoot = styled.div<DropdownStyleProps & { hasLabel: boolean }>(
    ({ size, disabled, inlineLabel, hasLabel, theme }) => {
        const t: Theme = theme.palette ? theme : lightTheme
        return {
            label: 'root',
            display: inlineLabel ? 'flex' : undefined,
            alignItems: inlineLabel ? 'center' : undefined,
            fontSize: `${size / defaultSize}rem`,
            color: disabled ? t.palette.disabled.text : 'inherit',
            '&>.dropdown-label': {
                fontWeight: 500,
            },
            '&>*:not(:first-of-type)': inlineLabel
                ? {
                      marginLeft: hasLabel ? `${size / defaultSize}rem` : undefined,
                  }
                : {
                      marginTop: hasLabel ? `${(size * 0.5) / defaultSize}rem` : undefined,
                  },
        }
    }
)

export const StyledDropdownContainer = styled.div<DropdownStyleProps>(
    ({ size, radius, disabled, color, theme }) => {
        const t: Theme = theme.palette ? theme : lightTheme
        const c = componentColor(color, t)
        return {
            label: 'container',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: size,
            cursor: disabled ? 'not-allowed' : 'pointer',
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

            '&:hover,&:focus-within': !disabled && {
                borderColor: c ? c : t.palette.borderActive,
            },
            '&>.dropdown-icon': {
                height: '100%',
                padding: (size * 8) / defaultSize,
                color: t.palette.gray,
            },
        }
    }
)
