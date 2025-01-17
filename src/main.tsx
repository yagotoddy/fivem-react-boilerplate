import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Interface from './Interface.tsx'
import './styles/Global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Interface />
  </StrictMode>,
)
