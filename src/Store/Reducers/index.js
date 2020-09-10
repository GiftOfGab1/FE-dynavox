
// We will need to import reducers as we add them
// import * as actions from "../Actions/index"

export const userInitialState = {
  error: null,
  isPlaying: false,
  userDetails: null
}

export default (state = userInitialState, action) => {
  switch (action.type) {
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
      return { 
        ...state,
        userDetails: action.userDetails
      }
    }
    // case 'UPDATE_USER' : {
    //   return { 
    //     ...state,
    //     userDetails: state.userDetails
    //   }
    // }
    default: {
      return state
      // throw new Error(`Unhandled type: ${action.type}`)
    }
  }
}

// export default rootReducer