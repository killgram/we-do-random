import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isAuthorized?: boolean
  isLoading?: boolean
  error?: string
  username?: string
  userId?: string
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

export type IAction =
  | IStartup
  | ILogout
  | ICleanApp
  | ILogin
  | ILoginSuccess
  | ILoginError
