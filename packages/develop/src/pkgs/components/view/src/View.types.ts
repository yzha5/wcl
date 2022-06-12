import { HTMLAttributes } from 'react'
import { Breakpoints } from '../../../utils'

type widthOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export interface ViewStyleProps {
    block?: boolean
    wrap?: boolean
    horizontal?: boolean
    w?: widthOption
    xs?: widthOption
    sm?: widthOption
    md?: widthOption
    lg?: widthOption
    xl?: widthOption
    xxl?: widthOption
    hideUp?: keyof Breakpoints
    hideDown?: keyof Breakpoints
}

export interface ViewProps extends Omit<HTMLAttributes<HTMLDivElement>, 'wrap'>, ViewStyleProps {}
