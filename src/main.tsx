import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CloudShopApp } from './CloudShopApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CloudShopApp />
  </StrictMode>,
)
