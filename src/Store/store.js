// // App Imports
// import {  LOGIN_RESPONSE, LOGOUT } from './actions'

// // Initial State
// export const userInitialState = {
//   error: null,
//   isLoading: false,
//   details: null
// }

// // State
// export default (state = userInitialState, action) => {
//   switch (action.type) {
//     case LOGIN_RESPONSE:
//       return {
//         ...state,
//         error: action.error,
//         isLoading: false
//       }

//     case LOGOUT:
//       return {
//         ...state,
//         error: null,
//         isLoading: false,
//         isAuthenticated: false,
//         details: null
//       }

//     default:
//       return state
//   }
// }


// // Imports
// import { combineReducers } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

// // App Imports
// import common from '../modules/common/api/state'
// import user from '../modules/user/api/state'
// import * as product from '../modules/product/api/state'
// import * as subscription from '../modules/subscription/api/state'
// import * as crate from '../modules/crate/api/state'
// import styleSurvey from '../modules/styleSurvey/api/state'

// // App Reducer
// const appReducer = combineReducers({
//   common,
//   user,
//   ...product,
//   ...subscription,
//   ...crate,
//   styleSurvey
// })

// // Root Reducer
// export const rootReducer = (state, action) => {
//   if (action.type === 'RESET') {
//     state = undefined
//   }

//   return appReducer(state, action)
// }

// // Load initial state from server side
// let initialState
// if (typeof window !== 'undefined') {
//   initialState = window.__INITIAL_STATE__
//   delete window.__INITIAL_STATE__
// }

// // Store
// export const store = createStore(
//   rootReducer,
//   initialState,

//   composeWithDevTools(
//     applyMiddleware(thunk),
//   )
// )
// */


