import { call, put, select } from 'redux-saga/effects'
import { settingsAction, appAction } from '@store/actions'
import { Navigate } from '@navigators'

export function* logout(): any {
  yield put(appAction.cleanApp())
  yield put(settingsAction.cleanSettings())
  yield call(Navigate.toAuthStack)
}
