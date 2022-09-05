import { takeLatest, all } from 'redux-saga/effects'
import { app } from '@store/types'
import { startup } from './StartupSaga'
import { logout } from './LogoutSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
  yield all([takeLatest(app.ActionTypes.LOGOUT, logout)])
}

export type RootSaga = ReturnType<typeof root>
