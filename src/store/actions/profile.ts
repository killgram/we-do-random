import { profile } from '@store/types'

/**
 *
 * @param {string} username
 * @param {string} userId
 * @return {profile.IAction}
 */
export function addProfile(username: string, userId: string): profile.IAction {
  return {
    type: profile.ActionTypes.ADD_PROFILE,
    username,
    userId,
  }
}

/**
 *
 * @return {profile.IAction}
 */
export function cleanProfile(): profile.IAction {
  return {
    type: profile.ActionTypes.CLEAN_PROFILE,
  }
}
