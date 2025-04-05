import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Supports weights 300-900
import '@fontsource-variable/phudu';
// Supports weights 100-900
import '@fontsource-variable/m-plus-2';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
