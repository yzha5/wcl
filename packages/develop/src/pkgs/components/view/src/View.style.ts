import styled from '@emotion/styled'
import { lightTheme } from '../../../utils'
import { ViewStyleProps } from './View.types'

export default styled.div<ViewStyleProps>(
    ({ block, horizontal, wrap, w, xs, sm, md, lg, xl, xxl, hideUp, hideDown, theme }) => {
        const t = theme.palette ? theme : lightTheme
        return {
            label: 'view',
            display: horizontal ? 'flex' : undefined,
            width: block ? '100%' : w ? `${w / 0.12}%` : undefined,
            flexWrap: wrap ? 'wrap' : undefined,

            [`@media screen and (min-width:${t.breakpoints['4k']}px)`]: {
                width: xxl ? `${xxl / 0.12}%` : undefined,
                display:
                    hideUp == 'xs' ||
                    hideUp == 'sm' ||
                    hideUp == 'md' ||
                    hideUp == 'lg' ||
                    hideUp == 'xl' ||
                    hideUp == '4k'
                        ? 'none'
                        : undefined,
            },
            [`@media screen and (min-width:${t.breakpoints['xl']}px) and (max-width:${t.breakpoints['4k'] - 1}px)`]: {
                width: xl ? `${xl / 0.12}%` : undefined,
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
                width: lg ? `${lg / 0.12}%` : undefined,
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
                width: md ? `${md / 0.12}%` : undefined,
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
                width: sm ? `${sm / 0.12}%` : undefined,
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
            [`@media screen and (max-width:${t.breakpoints['sm'] - 1}px)`]: {
                width: xs ? `${xs / 0.12}%` : undefined,
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
    }
)
