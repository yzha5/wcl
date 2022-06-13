import styled from '@emotion/styled'
import { NavbarStyleProps } from './Navbar.types'

export default styled.nav<NavbarStyleProps>(({ fixed, theme }) => {
    return {
        label: 'navbar',
        padding: '.5rem 1rem',
        position: fixed ? 'fixed' : 'static',
        width: 'inherit',
        backdropFilter: 'blur(36px)',
    }
})
