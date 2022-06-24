import { CSSProperties, InputHTMLAttributes } from 'react'
import { IconName } from '../../../icon/src'
import { IColor } from '../../../utils'

export interface InputBoxStyleProps {
    size?: number
    radius?: number
    disabled?: boolean
    color?: IColor
}

export interface InputBoxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
        InputBoxStyleProps {
    styles?: {
        root?: CSSProperties
        inputContainer?: CSSProperties
        input?: CSSProperties
    }
    frontIcon?: IconName
    endIcon?: IconName
    label?: string
    value: string
}
