import { InputProps } from './Input.types'
import { StyledInput, StyledInputContainer, StyledInputRoot } from './Input.style'
import { iconSelect } from '../../../icon/src'

export default function Input({
    label,
    inlineLabel,
    size = 36,
    radius,
    disabled,
    frontIcon,
    endIcon,
    styles,
    color,
    ...rest
}: InputProps) {
    const FrontIcon = frontIcon && iconSelect(frontIcon)
    const EndIcon = endIcon && iconSelect(endIcon)
    return (
        <StyledInputRoot
            color={color}
            inlineLabel={inlineLabel}
            hasLabel={label != undefined}
            style={styles?.root}
            size={size}
            disabled={disabled}
        >
            <label>
                <span style={styles?.label}>{label}</span>
                <StyledInputContainer
                    color={color}
                    size={size}
                    radius={radius}
                    style={styles?.inputContainer}
                    disabled={disabled}
                >
                    {frontIcon && (
                        <div>
                            <FrontIcon />
                        </div>
                    )}
                    <StyledInput
                        style={styles?.input}
                        size={size}
                        disabled={disabled}
                        {...rest}
                    />
                    {endIcon && (
                        <div>
                            <EndIcon />
                        </div>
                    )}
                </StyledInputContainer>
            </label>
        </StyledInputRoot>
    )
}
