import { GlobalProps } from '@emotion/react'
import { lightTheme } from '../../utils'

export const base: GlobalProps['styles'] = (theme) => {
    const t = theme.palette ? theme : lightTheme
    return {
        '*,*::before,*::after': {
            boxSizing: 'border-box',
            transition: '0.2s',
        },
        'html,body': {
            margin: 0,
        },
        html: {
            backgroundColor: t.palette.background,
            color: t.palette.text,
        },
        body: {
            fontSize: 16,
        },
        '@media screen and (min-width:3840px)': {
            body: {
                fontSize: 24,
            },
        },
        a: {
            '&:link': { color: t.palette.primary, textDecoration: 'none' },
            '&:visited': { color: t.palette.warn },
            '&:hover': { color: t.palette.success },
            '&:active': { color: t.palette.error },
        },
    }
}
