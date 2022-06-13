import { HTMLAttributes } from 'react'
import { Breakpoints } from '../../../utils'

export interface ContainerStyleProps {
    maxWidth?: keyof Breakpoints
    hideUp?: keyof Breakpoints
    hideDown?: keyof Breakpoints
    centerSelf?: boolean
}

export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, ContainerStyleProps {}
