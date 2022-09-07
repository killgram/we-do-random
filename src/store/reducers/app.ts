import { app } from '@store/types'

const initialState: app.IInitialState = {}

/**
 *
 * @param {app.IInitialState} state
 * @param {app.IAction} action
 * @return {app.IInitialState}
 */
const appReducer = (
  state: app.IInitialState = initialState,
  action: app.IAction,
): app.IInitialState => {
  switch (action.type) {
    case app.ActionTypes.CLEAN_APP: {
      return {}
    }
    case app.ActionTypes.LOGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case app.ActionTypes.ON_LOGIN_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        isAuthorized: true,
      }
    }
    case app.ActionTypes.ON_LOGIN_ERROR: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return state
    }
  }
}

export default appReducer
