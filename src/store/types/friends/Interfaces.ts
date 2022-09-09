import { ActionTypes } from './ActionTypes'

export interface IFriendList {
  [key: string]: any
}

export interface IInitialState {
  isLoading?: boolean
  username?: string
  userId?: string
  isOnline?: boolean
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
export interface IAddFriendError {
  type: ActionTypes.ADD_FRIEND_ERROR
}

export interface IOnAddFriendSuccess {
  type: ActionTypes.ON_ADD_FRIEND_SUCCESS
  username?: string
  userId?: string
  isOnline?: boolean
}

export interface IDeleteFriend {
  type: ActionTypes.DELETE_FRIEND
  userId?: string
}

export interface IOnDeleteFriendSuccess {
  type: ActionTypes.ON_DELETE_FRIEND_SUCCESS
  userId?: string
}

export interface IUpdateFriendStatus {
  type: ActionTypes.UPDATE_FRIEND_STATUS
  userId?: string
  isOnline?: boolean
}

export interface IUpdateFriendStatusSuccess {
  type: ActionTypes.UPDATE_FRIEND_STATUS_SUCCESS
  userId?: string
  isOnline?: boolean
}

export type IAction =
  | ICleanProfile
  | IAddFriend
  | IAddFriendError
  | IOnAddFriendSuccess
  | IDeleteFriend
  | IOnDeleteFriendSuccess
  | IUpdateFriendStatus
  | IUpdateFriendStatusSuccess
