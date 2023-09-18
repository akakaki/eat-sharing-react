import React from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/router/index.jsx'

import './virtual:windi.css'
import '@/assets/index.scss'

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
