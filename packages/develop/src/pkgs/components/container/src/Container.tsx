import { ContainerProps } from './Container.types'
import StyledContainer from './Container.style'

export default function Container({ children, ...rest }: ContainerProps) {
    return <StyledContainer {...rest}>{children}</StyledContainer>
}
