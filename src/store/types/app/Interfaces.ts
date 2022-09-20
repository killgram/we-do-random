import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isAuthorized?: boolean
  isLoading?: boolean
  error?: string
  username?: string
  userId?: string
  version?: string
  updateModal?: boolean
}

export interface IStartup {
  type: ActionTypes.STARTUP
}

export interface ILogout {
  type: ActionTypes.LOGOUT
}

export interface ICleanApp {
  type: ActionTypes.CLEAN_APP
}

export interface ILogin {
  type: ActionTypes.LOGIN
  isLoading?: boolean
  username: string
}

export interface ILoginSuccess {
  type: ActionTypes.ON_LOGIN_SUCCESS
  isAuthorized?: boolean
}

export interface ILoginError {
  type: ActionTypes.ON_LOGIN_ERROR
  error: string
}

export interface ISetAppVersion {
  type: ActionTypes.SET_APP_VERSION
  version?: string
}

export interface INewAppVersion {
  type: ActionTypes.NEW_APP_VERSION
}

export interface ICleanNewAppVersion {
  type: ActionTypes.CLEAN_NEW_APP_VERSION
}

export type IAction =
  | IStartup
  | ILogout
  | ICleanApp
  | ILogin
  | ILoginSuccess
  | ILoginError
  | ISetAppVersion
  | INewAppVersion
  | ICleanNewAppVersion
