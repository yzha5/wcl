import styled from '@emotion/styled'
import { lightTheme, Theme } from '../../../utils'

export const StyledPopupRoot = styled.div(({ theme }) => {
    return {
        label: 'root',
    }
})
export const StyledPopupContainer = styled.div<{
    layoutMinWidth: number
}>(({ layoutMinWidth, theme }) => {
    const t: Theme = theme.palette ? theme : lightTheme
    return {
        label: 'container',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        top: 0,
        left: 0,
        '&>.popup-layout': {
            position: 'absolute',
            overflow: 'auto',
            maxWidth: '100vw',
            maxHeight: '100vh',
            minWidth: layoutMinWidth,
            backgroundColor: t.palette.background,
            boxShadow: `0 0.125rem 0.5rem 0 ${
                t.mode == 'dark' ? 'rgba(255,255,255,0.32)' : 'rgba(0,0,0,0.32)'
            }`,
        },
    }
})
