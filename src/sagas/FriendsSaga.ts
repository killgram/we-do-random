import { call, put, select } from 'redux-saga/effects'
import { friendsAction } from '@store/actions'

import {
  dbAddFriend,
  dbCheckUser,
  dbUpdateFriendList,
  dbRemoveFriend,
} from '@services'
import {
  IAddFriend,
  IDeleteFriend,
  IUpdateFriendStatus,
} from '@store/types/friends/Interfaces'
import { errorToast, successToast } from '@utils'
import { Navigate } from '@navigators'

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
      yield put(friendsAction.addFriendError())
      return
    }
    if (userId === state?.profile?.userId) {
      yield call(errorToast, 'You are your own friend')
      yield put(friendsAction.addFriendError())
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
      yield call(successToast, 'Success')
      yield call(Navigate.goBack)
    } else {
      yield call(errorToast, 'User not found')
      yield put(friendsAction.addFriendError())
    }
  } catch (e) {
    yield call(errorToast, 'Something went wrong')
    yield put(friendsAction.addFriendError())
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
    yield put(friendsAction.addFriendError())
  }
}

export function* updateFriendStatus(action: IUpdateFriendStatus): any {
  const { userId, isOnline } = action
  const state = yield select()
  const currentUserId = state?.profile?.userId
  try {
    const friend = yield call(dbCheckUser, userId!)
    if (friend?.data()?.username) {
      yield put(friendsAction.updateFriendStatusSuccess(userId!, isOnline!))
    } else {
      yield call(dbRemoveFriend, currentUserId, userId!)
      yield put(friendsAction.onDeleteFriendSuccess(userId!))
    }
  } catch (e) {
    yield call(errorToast, 'Status update failed')
  }
}
