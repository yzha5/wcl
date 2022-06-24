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
import InputPage from './pages/input'
import { darkTheme, lightTheme } from './pkgs/utils'
import ColorPage from './pages/color'
import { Button } from './pkgs/components/button/src'
import { useState } from 'react'
import InputBoxPage from './pages/input-box'
import DropdownPage from './pages/dropdown'
import ListPage from './pages/list'
import PopupPage from './pages/popup'

export default function App() {
    const [isDark, setDark] = useState(false)
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Normalize />

            <Button size={16} text='light or dark' onClick={() => setDark(!isDark)} />
            <Routes>
                <Route element={<ContentLayout />}>
                    <Route path='color' element={<ColorPage />} />
                    <Route path='container' element={<ContainerPage />} />
                    <Route path='view' element={<ViewPage />} />
                    <Route path='icon' element={<IconPage />} />
                    <Route path='button' element={<ButtonPage />} />
                    <Route path='navbar' element={<NavbarPage />} />
                    <Route path='typography' element={<TypographyPage />} />
                    <Route path='input' element={<InputPage />} />
                    <Route path='input-box' element={<InputBoxPage />} />
                    <Route path='dropdown' element={<DropdownPage />} />
                    <Route path='list' element={<ListPage />} />
                    <Route path='popup' element={<PopupPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
}
