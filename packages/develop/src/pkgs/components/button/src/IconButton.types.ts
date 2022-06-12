import { ButtonHTMLAttributes, CSSProperties } from 'react'
import { IconName } from '../../../icon/src'
import { IColor, IFace } from '../../../utils'

export interface IconButtonStyleProps {
    color?: IColor
    size?: number
    radius?: number
    face?: IFace
}

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, IconButtonStyleProps {
    styles?: { root?: CSSProperties }
    icon: IconName
}
