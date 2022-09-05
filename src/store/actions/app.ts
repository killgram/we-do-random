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
