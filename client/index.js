import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import Home from './components/Home'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
      <Home />
    </Provider>,
    document.getElementById('app')
  )
})
