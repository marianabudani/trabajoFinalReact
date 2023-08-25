import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../dist/output.css'
import {NextUIProvider} from "@nextui-org/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="w-screen h-screen dark text-foreground bg-background p-8 flex items-start justify-center">
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>
)
