import IconPage from './pages/icon'
import { Button, IconButton } from './pkgs/components/button/src'
import Container from './pkgs/components/container/src/Container'
import View from './pkgs/components/view/src'

export default function App() {
    return (
        <Container maxWidth='lg'>
            <View w={3} xs={11} sm={8} md={6} lg={5} xl={3} xxl={2} hideUp='sm'>
                view
            </View>
        </Container>
    )
}
