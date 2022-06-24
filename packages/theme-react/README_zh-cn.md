# `theme-react`

> React 主题

## 安装

单独安装

```
yarn add @wdkx/theme-react

or

npm i @wdkx/theme-react
```

> 软件包`@wdkx/ui-react`已包含主题包，不需要单独安装，直接 import 使用即可。

## 使用

```tsx
import {ThemeProvider,useTheme} from '@wdkx/theme-react'//单独安装的引用方法
//import {ThemeProvider,useTheme} from '@wdkx/ui-react'//软件包安装的引用方法

const theme={...}

function App() {
    return <ThemeProvider theme={theme}>
    <p>这里写些东西</p>
    </ThemeProvider>
}

function LogTheme() {
    const theme=useTheme()
    console.log(theme.palette.primary)//主题提供的主要颜色
}
```
