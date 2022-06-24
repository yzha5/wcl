import { ThemeProvider, Normalize, darkTheme } from '@wdkx/ui-react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/default'
import HomePage from './pages/home'

export default function App() {
    return (
        <ThemeProvider>
            <Normalize />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
}
