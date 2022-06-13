import StyledView from './View.style'
import { ViewProps } from './View.types'

export default function View({ wrap, children, ...rest }: ViewProps) {
    return (
        <StyledView ww={wrap} {...rest}>
            {children}
        </StyledView>
    )
}
