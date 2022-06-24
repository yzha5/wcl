import { iconSelect } from '../../../icon/src'
import { StyledInputBoxRoot, StyledInputBoxContainer, StyledInput } from './InputBox.style'
import { InputBoxProps } from './InputBox.types'

export default function InputBox({
    frontIcon,
    endIcon,
    label,
    size = 56,
    radius,
    disabled,
    color,
    styles,
    ...rest
}: InputBoxProps) {
    const FrontIcon = frontIcon && iconSelect(frontIcon)
    const EndIcon = endIcon && iconSelect(endIcon)
    const styleProps = { size, radius, disabled, color }
    return (
        <StyledInputBoxRoot style={styles?.root} {...styleProps}>
            {frontIcon && (
                <div className='input-box-icon'>
                    <FrontIcon />
                </div>
            )}
            <StyledInputBoxContainer size={size} style={styles?.inputContainer}>
                <span>{label}</span>
                <StyledInput size={size} style={styles?.input} disabled={disabled} {...rest} />
            </StyledInputBoxContainer>
            {endIcon && (
                <div className='input-box-icon'>
                    <EndIcon />
                </div>
            )}
        </StyledInputBoxRoot>
    )
}
