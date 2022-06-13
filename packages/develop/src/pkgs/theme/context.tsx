import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { DeepMerge, DeepPartial, lightTheme, Theme } from '../utils'
import { ThemeProvider as Tp } from '@emotion/react'

const themeContext = createContext<Theme>(lightTheme)

interface Props {
    theme?: DeepPartial<Theme>
    children?: ReactNode
}

export function ThemeProvider({ theme, children }: Props) {
    const [t, setT] = useState<Theme>(lightTheme)

    useEffect(
        function () {
            setT(DeepMerge(t, theme))
        },
        [theme]
    )

    return (
        <themeContext.Provider value={t}>
            <Tp theme={t}>{children}</Tp>
        </themeContext.Provider>
    )
}

export function useTheme() {
    return useContext(themeContext)
}
