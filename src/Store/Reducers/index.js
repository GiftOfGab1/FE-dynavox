import { combineReducers } from 'redux'
// We will need to import reducers as we add them
import * as actions from "../Actions/index"
const rootReducer = combineReducers((state, action) => {
  switch (actions.type) {
    case 'GET_SOCIAL_SETTING' : {
      return {}
    }
    case 'ADD_SOCIAL_SETTING' : {
      return {}
    }
    case 'GET_SUBCATEGORIES' : {
      return {}
    }
    case 'ADD_SUBCATEGORY' : {
      return {}
    }
    case 'GET_PHRASES' : {
      return {}
    }
    case 'ADD_PHRASE' : {
      return {}
    }
    case 'SET_USER' : {
      return { userDetails: state.userDetails }
    }
    case 'UPDATE_USER' : {
      return { userDetails: state.userDetails }
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`)
    }
  }
})

export default rootReducer