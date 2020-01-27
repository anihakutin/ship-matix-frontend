import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import store from '../reducers/index.js';

import App from '../components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
