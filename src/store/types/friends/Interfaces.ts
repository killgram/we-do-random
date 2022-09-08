import { ActionTypes } from './ActionTypes'

export interface IFriendList {
  [key: string]: any
}

export interface IInitialState {
  isLoading?: boolean
  username?: string
  userId?: string
  isOnline?: boolean
  error?: string
  isUpdate?: boolean
  list?: Array<IFriendList>
}

export interface ICleanProfile {
  type: ActionTypes.CLEAN_FRIEND
}

//
export interface IAddFriend {
  type: ActionTypes.ADD_FRIEND
  isUpdate?: boolean
  userId?: string
}

export interface IOnAddFriendSuccess {
  type: ActionTypes.ON_ADD_FRIEND_SUCCESS
  username?: string
  userId?: string
  isOnline?: boolean
}

export interface IAddFriendError {
  type: ActionTypes.ADD_FRIEND_ERROR
  error?: string
}

export interface IDeleteFriend {
  type: ActionTypes.DELETE_FRIEND
  userId?: string
}

export interface IOnDeleteFriendSuccess {
  type: ActionTypes.ON_DELETE_FRIEND_SUCCESS
  userId?: string
}

export type IAction =
  | ICleanProfile
  | IAddFriend
  | IOnAddFriendSuccess
  | IDeleteFriend
  | IOnDeleteFriendSuccess
  | IAddFriendError
