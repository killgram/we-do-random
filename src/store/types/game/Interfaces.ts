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
  finish?: {
    isLoading?: boolean
    username?: string
    phrase?: string
    chance?: string
  }
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

export interface IStartFinishGame {
  type: ActionTypes.START_FINISH_GAME
}

export interface IGameFinishSuccess {
  type: ActionTypes.GAME_FINISH_SUCCESS
  username?: string
  phrase?: string
  chance?: string
}

export type IAction =
  | ICreateGame
  | ICleanGame
  | IOnCreateGameSuccess
  | IAddPhraseIntoGame
  | IDeletePhraseOutGame
  | IStartFinishGame
  | IGameFinishSuccess
