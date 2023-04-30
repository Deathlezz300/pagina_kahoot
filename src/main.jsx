import React from 'react'
import ReactDOM from 'react-dom/client'
import { VetQuizApp } from './VetQuizApp'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import './assets/css/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <VetQuizApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
