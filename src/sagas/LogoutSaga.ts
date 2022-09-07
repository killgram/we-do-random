import { call, put } from 'redux-saga/effects'
import { settingsAction, appAction, profileAction } from '@store/actions'
import { Navigate } from '@navigators'

export function* logout(): any {
  yield put(appAction.cleanApp())
  yield put(settingsAction.cleanSettings())
  yield put(profileAction.cleanProfile())

  yield call(Navigate.toAuthStack)
}
