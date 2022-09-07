import { call, put } from 'redux-saga/effects'

import { appAction, profileAction } from '@store/actions'
import { Navigate } from '@navigators'

import { ILogin } from '@store/types/app/Interfaces'
import { dbLogin } from '@services'
import { getUserId } from '@utils'

export function* login(action: ILogin): any {
  const { username } = action

  try {
    const userId = getUserId(username)
    const result = yield call(dbLogin, userId, username)

    if (result) {
      yield put(appAction.loginSuccess())
      yield put(profileAction.addProfile(username, userId))
      yield call(Navigate.toAppStack)
    }
  } catch (e) {
    yield put(appAction.loginError((e as Error).message))
  }
}
