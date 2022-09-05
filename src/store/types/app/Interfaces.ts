import { ActionTypes } from './ActionTypes'

export interface IInitialState {}

export interface IStartup {
  type: ActionTypes.STARTUP
}

export interface ILogout {
  type: ActionTypes.LOGOUT
}

export interface ICleanApp {
  type: ActionTypes.CLEAN_APP
}

export type IAction = IStartup | ILogout | ICleanApp
