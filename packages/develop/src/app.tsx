import { Route, Routes } from 'react-router-dom'
import ContentLayout from './layouts/content'
import ButtonPage from './pages/button'
import ContainerPage from './pages/container'
import IconPage from './pages/icon'
import NavbarPage from './pages/navbar'
import ViewPage from './pages/view'
import { ThemeProvider } from './pkgs/theme'
import Normalize from './pkgs/normalize/src'
import TypographyPage from './pages/typography'

export default function App() {
    return (
        <>
            <Normalize />
            <Routes>
                <Route element={<ContentLayout />}>
                    <Route path='container' element={<ContainerPage />} />
                    <Route path='view' element={<ViewPage />} />
                    <Route path='icon' element={<IconPage />} />
                    <Route path='button' element={<ButtonPage />} />
                    <Route path='navbar' element={<NavbarPage />} />
                    <Route path='typography' element={<TypographyPage />} />
                </Route>
            </Routes>
        </>
    )
}
