import { ButtonHTMLAttributes, CSSProperties } from 'react'
import { IconName } from '@wdkx/icon-react'
import { IColor, IFace } from '@wdkx/component-tools-react'

export interface IconButtonStyleProps {
    color?: IColor
    size?: number
    radius?: number
    face?: IFace
}

export interface IconButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        IconButtonStyleProps {
    styles?: { root?: CSSProperties }
    icon: IconName
}
