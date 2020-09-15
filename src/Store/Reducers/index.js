
// We will need to import reducers as we add them
// import * as actions from "../Actions/index"

// import { setSocialSettings } from "../Actions"

export const userInitialState = {
  error: null,
  isPlaying: false,
  userDetails: null,
  socialSettings: null
}

export default (state = userInitialState, action) => {
  switch (action.type) {
    case 'SET_SOCIAL_SETTINGS' : {
      return {
        ...state,
        socialSettings: action.socialSettings
      }
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
      return {
        ...state,
        socialSettings: action.socialSettings
      }
    }
    case 'SET_USER' : {
      return { 
        ...state,
        userDetails: action.userDetails
      }
    }
    case 'UPDATE_USER' : {
      return { 
        ...state,
        userDetails: action.userDetails
      }
    }
    case 'START_PLAY' : {
      return { 
        ...state,
        isPlaying: state.isPlaying = true
      }
    }
    case 'STOP_PLAY' : {
      return { 
        ...state,
        isPlaying: state.isPlaying = false
      }
    }
    default: {
      return state
      // throw new Error(`Unhandled type: ${action.type}`)
    }
  }
}

// export default rootReducer