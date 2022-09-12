import { call, put, select } from 'redux-saga/effects'
import {
  settingsAction,
  appAction,
  profileAction,
  friendsAction,
  gameAction,
} from '@store/actions'
import { Navigate } from '@navigators'
import { dbLogout, dbRemoveFriendList } from '@services'

export function* logout(): any {
  const state = yield select()

  yield put(appAction.cleanApp())
  yield put(settingsAction.cleanSettings())
  yield put(profileAction.cleanProfile())
  yield put(friendsAction.cleanFriends())
  yield put(gameAction.cleanGame())

  yield call(Navigate.toAuthStack)
  yield call(dbLogout, state?.profile?.userId)
  yield call(dbRemoveFriendList, state?.profile?.userId)
}
