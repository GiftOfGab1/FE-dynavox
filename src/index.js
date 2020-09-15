//dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App/App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension'


// App imports
import './index.css'
import AppState from './Store/Reducers/index'

const appReducer = combineReducers({
  AppState,
})

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  router, 
  document.getElementById('root')
);
