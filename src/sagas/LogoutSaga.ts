import { call, put, select } from 'redux-saga/effects'
import { settingsAction, appAction, profileAction } from '@store/actions'
import { Navigate } from '@navigators'
import { dbLogout } from '@services'

export function* logout(): any {
  const state = yield select()

  yield put(appAction.cleanApp())
  yield put(settingsAction.cleanSettings())
  yield put(profileAction.cleanProfile())

  yield call(Navigate.toAuthStack)
  yield call(dbLogout, state?.profile?.userId)
}
