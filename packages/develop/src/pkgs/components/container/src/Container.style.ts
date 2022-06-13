import styled from '@emotion/styled'
import { lightTheme } from '../../../utils'
import { ContainerStyleProps } from './Container.types'

export default styled.div<ContainerStyleProps>(({ centerSelf, maxWidth, hideUp, hideDown, theme }) => {
    const t = theme.palette ? theme : lightTheme
    return {
        label: 'container',
        padding: '1rem',
        marginRight: centerSelf ? 'auto' : undefined,
        marginLeft: centerSelf ? 'auto' : undefined,
        maxWidth: maxWidth ? t.breakpoints[maxWidth] : '100%',

        [`@media screen and (min-width:${t.breakpoints['4k']}px)`]: {
            display:
                hideUp == 'xs' || hideUp == 'sm' || hideUp == 'md' || hideUp == 'lg' || hideUp == 'xl' || hideUp == '4k'
                    ? 'none'
                    : undefined,
        },
        [`@media screen and (min-width:${t.breakpoints['xl']}px) and (max-width:${t.breakpoints['4k'] - 1}px)`]: {
            display:
                hideUp == 'xs' ||
                hideUp == 'sm' ||
                hideUp == 'md' ||
                hideUp == 'lg' ||
                hideUp == 'xl' ||
                hideDown == '4k'
                    ? 'none'
                    : undefined,
        },
        [`@media screen and (min-width:${t.breakpoints['lg']}px) and (max-width:${t.breakpoints['xl'] - 1}px)`]: {
            display:
                hideUp == 'xs' ||
                hideUp == 'sm' ||
                hideUp == 'md' ||
                hideUp == 'lg' ||
                hideDown == 'xl' ||
                hideDown == '4k'
                    ? 'none'
                    : undefined,
        },
        [`@media screen and (min-width:${t.breakpoints['md']}px) and (max-width:${t.breakpoints['lg'] - 1}px)`]: {
            display:
                hideUp == 'xs' ||
                hideUp == 'sm' ||
                hideUp == 'md' ||
                hideDown == 'lg' ||
                hideDown == 'xl' ||
                hideDown == '4k'
                    ? 'none'
                    : undefined,
        },
        [`@media screen and (min-width:${t.breakpoints['sm']}px) and (max-width:${t.breakpoints['md'] - 1}px)`]: {
            display:
                hideUp == 'xs' ||
                hideUp == 'sm' ||
                hideDown == 'md' ||
                hideDown == 'lg' ||
                hideDown == 'xl' ||
                hideDown == '4k'
                    ? 'none'
                    : undefined,
        },
        [`@media screen and (min-width:${t.breakpoints['xs']}px) and (max-width:${t.breakpoints['sm'] - 1}px)`]: {
            display:
                hideUp == 'xs' ||
                hideDown == 'sm' ||
                hideDown == 'md' ||
                hideDown == 'lg' ||
                hideDown == 'xl' ||
                hideDown == '4k'
                    ? 'none'
                    : undefined,
        },
        [`@media screen and (max-width:${t.breakpoints['xs'] - 1}px)`]: {
            display:
                hideDown == 'xs' ||
                hideDown == 'sm' ||
                hideDown == 'md' ||
                hideDown == 'lg' ||
                hideDown == 'xl' ||
                hideDown == '4k'
                    ? 'none'
                    : undefined,
        },
    }
})
