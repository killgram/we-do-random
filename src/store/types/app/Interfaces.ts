import { ActionTypes } from './ActionTypes'

export interface IInitialState {}

export interface IStartup {
  type: ActionTypes.STARTUP
}

export type IAction = IStartup
