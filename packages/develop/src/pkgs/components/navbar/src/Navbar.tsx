import { NavbarProps } from './Navbar.types'
import StyledNavbar from './Navbar.style'

export default function Navbar({ children, ...rest }: NavbarProps) {
    return <StyledNavbar {...rest}>{children}</StyledNavbar>
}
