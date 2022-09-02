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
