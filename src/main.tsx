import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/andino.css";

import App from './App.tsx'
document.title = import.meta.env.VITE_APP_TITLE;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
