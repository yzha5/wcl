import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import Normalize from './pkgs/normalize/src'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Normalize />
        <App />
    </React.StrictMode>
)
