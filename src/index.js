//dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App/App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension'


// App imports
import './index.css'
import AppState from './Store/Reducers/index'

// import rootReducer  from './Store/Reducers/index'
const appReducer = combineReducers({
  AppState,
  // ...userReducer,
})

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export const store = createStore(
  rootReducer,
  composeWithDevTools()
  // other store enhancers if any
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
