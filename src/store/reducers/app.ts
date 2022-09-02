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
    case app.ActionTypes.STARTUP: {
      return {
        ...state,
      }
    }

    default: {
      return state
    }
  }
}

export default appReducer
