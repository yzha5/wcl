import { HTMLAttributes } from 'react'

export interface NavbarStyleProps {
    fixed?: boolean
}

export interface NavbarProps extends HTMLAttributes<HTMLElement>, NavbarStyleProps {}
