import { ActionTypes } from './ActionTypes'

export interface IUser {
  username: string
  userId: string
}

export interface IInitialState {
  gameType?: string
  gameName?: string
  gameLead?: IUser
}

export interface ICreateGame {
  type: ActionTypes.CREATE_GAME
  gameType?: string
  gameName?: string
  gameLead?: IUser
}

export interface IOnCreateGameSuccess {
  type: ActionTypes.ON_CREATE_GAME_SUCCESS
  gameType?: string
  gameName?: string
  gameLead?: IUser
}

export interface ICleanGame {
  type: ActionTypes.CLEAN_GAME
}

export type IAction = ICreateGame | ICleanGame | IOnCreateGameSuccess
