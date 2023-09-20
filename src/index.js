import React from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import store from '@/store/index.js'

import App from '@/router/index.js'

import './virtual:windi.css'
import '@/assets/index.scss'

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
    </React.StrictMode>
  )
