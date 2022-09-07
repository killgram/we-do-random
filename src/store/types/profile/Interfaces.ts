import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  username?: string
  userId?: string
}

export interface IStartup {
  type: ActionTypes.ADD_PROFILE
  username?: string
  userId?: string
}

export interface ICleanProfile {
  type: ActionTypes.CLEAN_PROFILE
}

export type IAction = IStartup | ICleanProfile
