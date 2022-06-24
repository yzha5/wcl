import { MouseEvent } from 'react'
import { iconSelect } from '@wdkx/icon-react'
import { ShowRipple } from '@wdkx/component-tools-react'
import StyledIconButton from './IconButton.style'
import { IconButtonProps } from './IconButton.types'

export default function IconButton({
    icon,
    styles,
    onMouseDown,
    className,
    ...rest
}: IconButtonProps) {
    const Icon = iconSelect(icon)
    const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
        onMouseDown && onMouseDown(e)
        ShowRipple(e)
    }
    return (
        <StyledIconButton
            className={['ripple', className].join('')}
            style={styles?.root}
            onMouseDown={handleMouseDown}
            {...rest}
        >
            <Icon />
        </StyledIconButton>
    )
}
