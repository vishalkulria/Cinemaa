import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './store/store'
import './index.css'

// Application entry point with Redux and Router setup
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Cinemaa">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

