import { ButtonHTMLAttributes, CSSProperties } from 'react'
import { IColor, IFace } from '@wdkx/component-tools-react'

export interface ButtonStyleProps {
    color?: IColor
    size?: number
    radius?: number
    face?: IFace
    hasSecondaryText?: boolean
}

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        ButtonStyleProps {
    styles?: { root?: CSSProperties; content?: CSSProperties }
    text: string
    secondaryText?: string
}
