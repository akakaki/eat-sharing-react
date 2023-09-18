import React from 'react'
import { createRoot } from 'react-dom/client'

import './virtual:windi.css'
import '@/assets/index.scss'

import App from './App.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
