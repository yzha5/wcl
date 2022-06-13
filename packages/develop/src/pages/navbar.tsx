import Container from '../pkgs/components/container/src'
import Navbar from '../pkgs/components/navbar/src'
import View from '../pkgs/components/view/src'
import './navbar.css'

function Ct() {
    return (
        <>
            <p>navbar content 1</p>
            <p>navbar content 2</p>
            <p>navbar content 3</p>
            <p>navbar content 4</p>
            <p>navbar content 5</p>
            <p>navbar content 6</p>
            <p>navbar content 7</p>
            <p>navbar content 8</p>
            <p>navbar content 9</p>
            <p>navbar content 10</p>
            <p>navbar content 11</p>
            <p>navbar content 12</p>
        </>
    )
}

export default function NavbarPage() {
    return (
        <Container>
            <View gap={16}>
                <div className='navbar-container'>
                    <Navbar>navbar</Navbar>
                    <Ct />
                </div>
                <div className='navbar-container'>
                    <Navbar fixed>navbar fixed</Navbar>
                    <Ct />
                </div>
            </View>
        </Container>
    )
}
