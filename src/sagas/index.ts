import { takeLatest, all } from 'redux-saga/effects'
import { app, settings } from '@store/types'
import { startup } from './StartupSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
}

export type RootSaga = ReturnType<typeof root>
