import { friends } from '@store/types'

/**
 *
 * @param {string} userId
 * @return {friends.IAction}
 */
export function addFriend(userId: string): friends.IAction {
  return {
    type: friends.ActionTypes.ADD_FRIEND,
    userId,
  }
}

/**
 *
 * @return {friends.IAction}
 */
export function addFriendError(): friends.IAction {
  return {
    type: friends.ActionTypes.ADD_FRIEND_ERROR,
  }
}

/**
 * @param {string} username
 * @param {string} userId
 * @param {boolean} isOnline
 * @return {friends.IAction}
 */
export function onAddFriendSuccess(
  username: string,
  userId: string,
  isOnline: boolean,
): friends.IAction {
  return {
    type: friends.ActionTypes.ON_ADD_FRIEND_SUCCESS,
    username,
    userId,
    isOnline,
  }
}

/**
 *
 * @return {friends.IAction}
 */
export function cleanFriends(): friends.IAction {
  return {
    type: friends.ActionTypes.CLEAN_FRIEND,
  }
}

/**
 *
 * @param {string} userId
 * @return {friends.IAction}
 */
export function deleteFriend(userId: string): friends.IAction {
  return {
    type: friends.ActionTypes.DELETE_FRIEND,
    userId,
  }
}

/**
 * @param {string} userId
 * @return {friends.IAction}
 */
export function onDeleteFriendSuccess(userId: string): friends.IAction {
  return {
    type: friends.ActionTypes.ON_DELETE_FRIEND_SUCCESS,
    userId,
  }
}

/**
 *
 * @param {string} userId
 * @param {boolean} isOnline
 * @return {friends.IAction}
 */
export function updateFriendStatus(
  userId: string,
  isOnline: boolean,
): friends.IAction {
  return {
    type: friends.ActionTypes.UPDATE_FRIEND_STATUS,
    userId,
    isOnline,
  }
}

/**
 *
 * @param {string} userId
 * @param {boolean} isOnline
 * @return {friends.IAction}
 */
export function updateFriendStatusSuccess(
  userId: string,
  isOnline: boolean,
): friends.IAction {
  return {
    type: friends.ActionTypes.UPDATE_FRIEND_STATUS_SUCCESS,
    userId,
    isOnline,
  }
}
