import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import { RouterApp } from './components/router/routerApp'
import { UserProvider } from './context/UserContext'



createRoot(document.getElementById('root')).render(
  <UserProvider>
    
      <RouterApp />         
    
  </UserProvider>
)
