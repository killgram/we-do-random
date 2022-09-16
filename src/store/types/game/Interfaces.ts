import { ActionTypes } from './ActionTypes'

export interface IPhrase {
  [key: string]: any
}

export interface IPlayers {
  [key: string]: any
}

export interface IUser {
  username: string
  userId: string
}

export type IGameStatus = 'inviting' | 'playing' | 'finishing'

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
  playersList?: Array<IPlayers>
  username?: string
  userId?: string
  isOnline?: boolean
  isAccepted?: boolean
  gameStatus?: IGameStatus
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

export interface IAddPlayer {
  type: ActionTypes.ADD_PLAYER
  leadUserId?: string
  userId?: string
}

export interface IAddPlayerSuccess {
  type: ActionTypes.ADD_PLAYER_SUCCESS
  leadUserId?: string
  username?: string
  userId?: string
  isOnline?: boolean
  isAccepted?: boolean
}

export interface IKickOffPlayer {
  type: ActionTypes.KICKOFF_PLAYER
  leadUserId?: string
  userId?: string
}

export interface IKickOffPlayerSuccess {
  type: ActionTypes.KICKOFF_PLAYER_SUCCESS
  leadUserId?: string
  userId?: string
}

export interface IUpdateAcceptedStatus {
  type: ActionTypes.UPDATE_ACCEPTED_STATUS
  userId?: string
  isAccepted?: boolean
}

export interface IUpdateGameView {
  type: ActionTypes.UPDATE_GAME_VIEW
  data?: IInitialState
}

export interface IUpdateGameViewSuccess {
  type: ActionTypes.UPDATE_GAME_VIEW_SUCCESS
  data?: IInitialState
}

export interface IUpdateGameStatus {
  type: ActionTypes.UPDATE_GAME_STATUS
  gameStatus?: IGameStatus
}

export type IAction =
  | ICreateGame
  | ICleanGame
  | IOnCreateGameSuccess
  | IAddPhraseIntoGame
  | IDeletePhraseOutGame
  | IStartFinishGame
  | IGameFinishSuccess
  | IAddPlayer
  | IAddPlayerSuccess
  | IKickOffPlayer
  | IKickOffPlayerSuccess
  | IUpdateAcceptedStatus
  | IUpdateGameView
  | IUpdateGameViewSuccess
  | IUpdateGameStatus
