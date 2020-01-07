import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import store from '../reducers/index.js';

import App from '../components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

store.subscribe(() => {
  console.log("Store Changed", store.getState())
  })

// store.dispatch({ type: "CREATE_USER", payload: {name: "Heshie B", email: "4hbrody@gmail.com", password: "Tzviki123$$"}})
// store.dispatch({ type: "CREATE_USER", payload: {name: "Heshie 2", email: "4fdscail.com", password: "Tzviki123$$"}})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
