import { MouseEvent } from 'react'
import { ButtonProps } from './Button.types'
import StyledButton from './Button.style'
import { ShowRipple } from '@wdkx/component-tools-react'

export default function Button({
    text,
    secondaryText,
    styles,
    className,
    onMouseDown,
    ...rest
}: ButtonProps) {
    const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
        onMouseDown && onMouseDown(e)
        ShowRipple(e)
    }
    return (
        <StyledButton
            hasSecondaryText={secondaryText != undefined}
            className={['ripple', className].join('')}
            style={styles?.root}
            onMouseDown={handleMouseDown}
            {...rest}
        >
            <div className='wdkx-button-content' style={styles?.content}>
                <div className='wdkx-button-content-text'>{text}</div>
                {secondaryText && (
                    <div className='wdkx-button-content-secondary-text'>{secondaryText}</div>
                )}
            </div>
        </StyledButton>
    )
}
