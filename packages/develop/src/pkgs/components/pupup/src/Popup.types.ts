import { CSSProperties, ReactNode } from 'react'

export interface PopupStyleProps {}

export interface PopupProps extends PopupStyleProps {
    styles?: { root?: CSSProperties; container?: CSSProperties }
    control: ReactNode
    children?: ReactNode
    isOpen: boolean
    onOutClick?: () => void
    onClose?: () => void
    layoutClassName?: string
}
