import styled from '@emotion/styled'
import { componentColor, lightColor, lightTheme, textColor, Theme } from '../../../utils'
import { ListStyleProps } from './List.types'
import { defaultSize } from './List.variable'

export const StyledListRoot = styled.ul<ListStyleProps>(({ size, theme }) => {
    return {
        label: 'root',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    }
})
export const StyledListItem = styled.li<
    ListStyleProps & { hasSecondary: boolean; disabled: boolean; selected: boolean }
>(({ size, hasSecondary, color, disabled, selected, theme }) => {
    const t: Theme = theme.palette ? theme : lightTheme
    const c = componentColor(color, t)
    const hoverBG = color
        ? lightColor(c, t.mode == 'dark')
        : lightColor(t.palette.gray, t.mode == 'dark')
    const hoverTextColor = textColor(hoverBG)
    return {
        label: 'item',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: (size * 8) / defaultSize,
        height: hasSecondary ? (size * 56) / defaultSize : size,
        cursor: disabled ? 'not-allowed' : 'pointer',
        '& .list-item-icon': {
            height: hasSecondary ? (size * 24) / defaultSize : (size * 16) / defaultSize,
        },
        '&>*:not(:first-of-type):not(.ripple--container)': {
            marginLeft: (size * 8) / defaultSize,
        },
        '&>.list-item-content': {
            display: 'flex',
            alignItems: 'center',

            '&>*:not(:first-of-type)': {
                marginLeft: (size * 8) / defaultSize,
            },
        },
        '&:hover': !disabled && {
            backgroundColor: hoverBG,
            color: hoverTextColor,
        },
        backgroundColor: !disabled && selected ? hoverBG : undefined,
        color: disabled ? t.palette.disabled.text : selected ? hoverTextColor : undefined,
        '&>.ripple--container>span': {
            backgroundColor: hoverTextColor,
        },
    }
})
