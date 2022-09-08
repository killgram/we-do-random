import { takeLatest, all } from 'redux-saga/effects'
import { app, friends } from '@store/types'
import { startup } from './StartupSaga'
import { logout } from './LogoutSaga'
import { login } from './LoginSaga'
import { addFriend, deleteFriend } from './FriendsSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
  yield all([takeLatest(app.ActionTypes.LOGOUT, logout)])
  yield all([takeLatest(app.ActionTypes.LOGIN, login)])
  yield all([takeLatest(friends.ActionTypes.ADD_FRIEND, addFriend)])
  yield all([takeLatest(friends.ActionTypes.DELETE_FRIEND, deleteFriend)])
}

export type RootSaga = ReturnType<typeof root>
