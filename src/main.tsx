import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GameProvider from './provider/GameProvider.tsx'
import { GlobalStyle } from "./global-styles/GlobalStyle.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
)
