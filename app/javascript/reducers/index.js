import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  auth: authReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
