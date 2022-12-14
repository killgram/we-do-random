import { friends } from '@store/types'

const initialState: friends.IInitialState = {}

/**
 *
 * @param {friends.IInitialState} state
 * @param {friends.IAction} action
 * @return {friends.IInitialState}
 */
const friendsReducer = (
  state: friends.IInitialState = initialState,
  action: friends.IAction,
): friends.IInitialState => {
  switch (action.type) {
    case friends.ActionTypes.CLEAN_FRIEND: {
      return {}
    }
    // add
    case friends.ActionTypes.ADD_FRIEND: {
      return {
        ...state,
        isUpdate: true,
      }
    }
    case friends.ActionTypes.ADD_FRIEND_ERROR: {
      const oldState = { ...state }
      delete oldState.isUpdate
      return {
        ...oldState,
      }
    }
    case friends.ActionTypes.ON_ADD_FRIEND_SUCCESS: {
      const oldState = { ...state }
      const oldList = [...(state?.list || [])]
      const newFriend = {
        userId: action.userId,
        username: action.username,
        isOnline: action.isOnline,
      }
      const newList = oldList.concat([newFriend])
      delete oldState.isUpdate
      oldState.list = newList
      return {
        ...oldState,
      }
    }

    // remove
    case friends.ActionTypes.ON_DELETE_FRIEND_SUCCESS: {
      const oldState = { ...state }
      const oldList = [...(state?.list || [])]
      oldState.list = oldList.filter((item) => {
        return item.userId !== action.userId
      })
      return {
        ...oldState,
      }
    }

    // update
    case friends.ActionTypes.UPDATE_FRIEND_STATUS_SUCCESS: {
      const oldState = { ...state }
      const friendList = [...(state?.list || [])]
      friendList.forEach((item) => {
        if (item.userId === action.userId) {
          item.isOnline = action.isOnline
        }
      })
      oldState.list = friendList
      return {
        ...oldState,
      }
    }

    default: {
      return state
    }
  }
}

export default friendsReducer
