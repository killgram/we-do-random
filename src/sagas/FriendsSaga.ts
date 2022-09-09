import { call, put, select } from 'redux-saga/effects'
import { friendsAction } from '@store/actions'

import {
  dbAddFriend,
  dbCheckUser,
  dbUpdateFriendList,
  dbRemoveFriend,
} from '@services'
import { IAddFriend, IDeleteFriend } from '@store/types/friends/Interfaces'
import { errorToast, successToast } from '@utils'

export function* addFriend(action: IAddFriend): any {
  const { userId } = action
  const state = yield select()

  try {
    let checkUserInFriendList = false
    state?.friends?.list?.forEach((item) => {
      if (item.userId === userId) {
        checkUserInFriendList = true
      }
    })
    if (checkUserInFriendList) {
      yield call(errorToast, 'User already add')
      return
    }
    const user = yield call(dbCheckUser, userId!)
    if (user.data().username) {
      const currentUserId = state?.profile?.userId
      const friendsCount = state?.friends?.list?.length
      if (friendsCount) {
        yield call(
          dbUpdateFriendList,
          currentUserId!,
          userId!,
          user.data().username,
        )
      } else {
        yield call(dbAddFriend, currentUserId!, userId!, user.data().username)
      }
      yield put(
        friendsAction.onAddFriendSuccess(
          user.data().username,
          userId!,
          user.data().isOnline,
        ),
      )
    } else {
      yield call(errorToast, 'User not found')
    }
  } catch (e) {
    yield call(errorToast, 'Something went wrong')
  }
}

export function* deleteFriend(action: IDeleteFriend): any {
  const { userId } = action
  const state = yield select()
  const currentUserId = state?.profile?.userId
  try {
    yield call(dbRemoveFriend, currentUserId, userId!)
    yield put(friendsAction.onDeleteFriendSuccess(userId!))
    yield call(successToast, 'Success')
  } catch (e) {
    yield call(errorToast, 'Something went wrong')
  }
}
