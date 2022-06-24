import { CSSProperties, InputHTMLAttributes } from 'react'
import { IconName } from '../../../icon/src'
import { IColor } from '../../../utils'

export interface InputStyleProps {
    size?: number
    radius?: number
    inlineLabel?: boolean
    disabled?: boolean
    color?: IColor
}

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
        InputStyleProps {
    styles?: {
        root?: CSSProperties
        label?: CSSProperties
        inputContainer?: CSSProperties
        input?: CSSProperties
    }
    label?: string
    value: string
    frontIcon?: IconName
    endIcon?: IconName
}
