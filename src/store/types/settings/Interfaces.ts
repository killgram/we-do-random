import { ActionTypes } from './ActionTypes'

export interface IAboutApp {
  appGit?: string
  authorGit?: string
  author?: string
  name?: string
  appVersion?: string
}

export interface IInitialState {
  language?: string
  aboutApp?: IAboutApp
  isLoading?: boolean
}

export interface ISetLanguageAction {
  type: ActionTypes.SET_LANGUAGE
  language: string
}

export interface ICleanSettings {
  type: ActionTypes.CLEAN_SETTINGS
}

export interface IGetAboutApp {
  type: ActionTypes.GET_ABOUT_APP
}

export interface IGetAboutAppSuccess {
  type: ActionTypes.GET_ABOUT_APP_SUCCESS
  aboutApp?: IAboutApp
}

export type IAction =
  | ISetLanguageAction
  | ICleanSettings
  | IGetAboutApp
  | IGetAboutAppSuccess
