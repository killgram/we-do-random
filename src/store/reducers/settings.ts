import { settings } from '@store/types'

const initialState: settings.IInitialState = {}

/**
 *
 * @param {settings.IInitialState} state
 * @param {settings.IAction} action
 * @return {settings.IInitialState}
 */
const settingsReducer = (
  state: settings.IInitialState = initialState,
  action: settings.IAction,
): settings.IInitialState => {
  switch (action.type) {
    case settings.ActionTypes.CLEAN_SETTINGS: {
      const oldState = { ...state }
      return {
        language: oldState.language,
      }
    }
    case settings.ActionTypes.SET_LANGUAGE: {
      return {
        ...state,
        language: action.language,
      }
    }
    // about app
    case settings.ActionTypes.GET_ABOUT_APP: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case settings.ActionTypes.GET_ABOUT_APP_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading
      return {
        ...oldState,
        aboutApp: {
          appGit: action.aboutApp?.appGit,
          authorGit: action.aboutApp?.authorGit,
          author: action.aboutApp?.author,
          name: action.aboutApp?.name,
          appVersion: action.aboutApp?.appVersion,
        },
      }
    }
    // support
    case settings.ActionTypes.GET_SUPPORT_DATA: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case settings.ActionTypes.GET_SUPPORT_DATA_SUCCESS: {
      const oldState = { ...state }
      delete oldState.isLoading

      return {
        ...oldState,
        supportData: action.supportData,
      }
    }

    default: {
      return state
    }
  }
}

export default settingsReducer
