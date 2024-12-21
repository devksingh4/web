import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './src/index.css';
import Portfolio from './src/Portfolio.page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
