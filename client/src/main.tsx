import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Toaster />
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
