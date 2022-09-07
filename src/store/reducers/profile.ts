import { profile } from '@store/types'

const initialState: profile.IInitialState = {}

/**
 *
 * @param {profile.IInitialState} state
 * @param {profile.IAction} action
 * @return {profile.IInitialState}
 */
const profileReducer = (
  state: profile.IInitialState = initialState,
  action: profile.IAction,
): profile.IInitialState => {
  switch (action.type) {
    case profile.ActionTypes.CLEAN_PROFILE: {
      return {}
    }
    case profile.ActionTypes.ADD_PROFILE: {
      return {
        ...state,
        username: action.username,
        userId: action.userId,
      }
    }

    default: {
      return state
    }
  }
}

export default profileReducer
