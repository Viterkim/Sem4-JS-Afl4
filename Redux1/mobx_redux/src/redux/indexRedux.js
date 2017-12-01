import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'

//let store = createStore(..);

export default () => (
  <Provider>
    <App />
  </Provider>
)