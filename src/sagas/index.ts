import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { app, friends, game } from '@store/types'
import { startup } from './StartupSaga'
import { logout } from './LogoutSaga'
import { login } from './LoginSaga'
import { addFriend, updateFriendStatus, deleteFriend } from './FriendsSaga'
import { createGame, startFinishGame } from './GameSaga'

/**
 * @description initialize root saga
 */
export default function* root(): any {
  yield all([takeLatest(app.ActionTypes.STARTUP, startup)])
  yield all([takeLatest(app.ActionTypes.LOGOUT, logout)])
  yield all([takeLatest(app.ActionTypes.LOGIN, login)])
  yield all([takeLatest(friends.ActionTypes.ADD_FRIEND, addFriend)])
  yield all([takeLatest(friends.ActionTypes.DELETE_FRIEND, deleteFriend)])
  yield all([
    takeEvery(friends.ActionTypes.UPDATE_FRIEND_STATUS, updateFriendStatus),
  ])
  yield all([takeLatest(game.ActionTypes.CREATE_GAME, createGame)])
  yield all([takeLatest(game.ActionTypes.START_FINISH_GAME, startFinishGame)])
}

export type RootSaga = ReturnType<typeof root>
