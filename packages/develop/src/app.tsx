import IconPage from './pages/icon'
import { Button, IconButton } from './pkgs/components/button/src'
import Container from './pkgs/components/container/src/Container'

export default function App() {
    return (
        <Container maxWidth='lg' hideDown='md'>
            <Button text='button' secondaryText='secondary text' />
            <div>1</div>
            <Button text='中文按钮' secondaryText='第二行也是中文的' />
            <Button text='中文按钮' />
            <div>1</div>
            <Button text='中文按钮' secondaryText='第二行也是中文的' size={144} radius={24} />
            <Button text='中文按钮' secondaryText='第二行也是中文的' size={144} radius={24} disabled />
            <IconButton icon='App' size={144} radius={24} />
            <IconButton icon='HeavyRain' color='error' size={144} radius={72} />
            <IconPage />
        </Container>
    )
}
