import { takeLatest, all } from 'redux-saga/effects'
import { app } from '@store/types'
import { startup } from './StartupSaga'
import { logout } from './LogoutSaga'
import { login } from './LoginSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
  yield all([takeLatest(app.ActionTypes.LOGOUT, logout)])
  yield all([takeLatest(app.ActionTypes.LOGIN, login)])
}

export type RootSaga = ReturnType<typeof root>
