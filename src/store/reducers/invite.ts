import { invite } from '@store/types'

const initialState: invite.IInitialState = {}

/**
 *
 * @param {invite.IInitialState} state
 * @param {invite.IAction} action
 * @return {invite.IInitialState}
 */
const inviteReducer = (
  state: invite.IInitialState = initialState,
  action: invite.IAction,
): invite.IInitialState => {
  switch (action.type) {
    case invite.ActionTypes.CLEAN_INVITE: {
      return {}
    }
    case invite.ActionTypes.INCOMING_INVITE: {
      return {
        ...state,
        isVisible: true,
        leaderName: action.leaderName,
        leadId: action.leadId,
        gameName: action.gameName,
      }
    }

    default: {
      return state
    }
  }
}

export default inviteReducer
