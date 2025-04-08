import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router"



import App from './App.jsx'
import ApiContextProvider from './context/ApiContextProvider.jsx'
import AuthProvider from './AuthContext/AuthProvider.jsx'
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <ThemeProvider>
    <BrowserRouter>
      <AuthProvider>
        <ApiContextProvider>
            <App />
        </ApiContextProvider>
      </AuthProvider>
    </BrowserRouter>
          </ThemeProvider>
    
  </StrictMode>,
)
