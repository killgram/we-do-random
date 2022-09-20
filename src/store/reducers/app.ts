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
      const oldState = { ...state }
      return {
        version: oldState.version,
      }
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
    case app.ActionTypes.SET_APP_VERSION: {
      return {
        ...state,
        version: action.version,
      }
    }

    case app.ActionTypes.NEW_APP_VERSION: {
      return {
        ...state,
        updateModal: true,
      }
    }

    case app.ActionTypes.CLEAN_NEW_APP_VERSION: {
      const oldState = { ...state }
      delete oldState.updateModal
      return {
        ...oldState,
      }
    }

    default: {
      return state
    }
  }
}

export default appReducer
