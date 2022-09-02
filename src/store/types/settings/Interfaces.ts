import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  language?: string
}

export interface ISetLanguageAction {
  type: ActionTypes.SET_LANGUAGE
  language: string
}

export type IAction = ISetLanguageAction
