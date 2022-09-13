import { ActionTypes } from './ActionTypes'

export interface IPhrase {
  [key: string]: any
}

export interface IUser {
  username: string
  userId: string
}

export interface IInitialState {
  gameType?: string
  gameName?: string
  gameLead?: IUser
  list?: Array<IPhrase>
}

export interface ICleanGame {
  type: ActionTypes.CLEAN_GAME
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

export interface IAddPhraseIntoGame {
  type: ActionTypes.ADD_PHRASE_INTO_GAME
  username?: string
  userId?: string
  phrase?: string
}

export interface IDeletePhraseOutGame {
  type: ActionTypes.DELETE_PHRASE_OUT_GAME
  phraseId: number
}

export type IAction =
  | ICreateGame
  | ICleanGame
  | IOnCreateGameSuccess
  | IAddPhraseIntoGame
  | IDeletePhraseOutGame
