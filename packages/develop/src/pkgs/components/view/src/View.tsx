import StyledView from './View.style'
import { ViewProps } from './View.types'

export default function View({ children, ...rest }: ViewProps) {
    return <StyledView {...rest}>{children}</StyledView>
}
