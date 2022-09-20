import { app } from '@store/types'

/**
 *
 * @return {app.IAction}
 */
export function startup(): app.IAction {
  return {
    type: app.ActionTypes.STARTUP,
  }
}

/**
 *
 * @return {app.IAction}
 */
export function logout(): app.IAction {
  return {
    type: app.ActionTypes.LOGOUT,
  }
}

/**
 *
 * @return {app.IAction}
 */
export function cleanApp(): app.IAction {
  return {
    type: app.ActionTypes.CLEAN_APP,
  }
}

/**
 * @param {string} username
 * @return {app.IAction}
 */
export function login(username: string): app.IAction {
  return {
    type: app.ActionTypes.LOGIN,
    username,
  }
}

/**
 * @return {app.IAction}
 */
export function loginSuccess(): app.IAction {
  return {
    type: app.ActionTypes.ON_LOGIN_SUCCESS,
  }
}

/**
 * @param {string} error
 * @return {app.IAction}
 */
export function loginError(error: string): app.IAction {
  return {
    type: app.ActionTypes.ON_LOGIN_ERROR,
    error,
  }
}

/**
 * @param {string} version
 * @return {app.IAction}
 */
export function setAppVersion(version: string): app.IAction {
  return {
    type: app.ActionTypes.SET_APP_VERSION,
    version,
  }
}

/**
 * @return {app.IAction}
 */
export function newAppVersion(): app.IAction {
  return {
    type: app.ActionTypes.NEW_APP_VERSION,
  }
}

/**
 * @return {app.IAction}
 */
export function cleanNewAppVersion(): app.IAction {
  return {
    type: app.ActionTypes.CLEAN_NEW_APP_VERSION,
  }
}
