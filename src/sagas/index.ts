import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { app, friends, game, invite, settings } from '@store/types'
import { startup } from './StartupSaga'
import { logout } from './LogoutSaga'
import { login } from './LoginSaga'
import { addFriend, updateFriendStatus, deleteFriend } from './FriendsSaga'
import {
  createGame,
  startFinishGame,
  addPlayer,
  kickOffPlayer,
  updateGameView,
} from './GameSaga'
import { declineInvite, acceptInvite } from './InviteSaga'
import { getAboutApp } from './AboutAppSaga'
import { getSupportData } from './SupportSaga'

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
  yield all([takeLatest(game.ActionTypes.ADD_PLAYER, addPlayer)])
  yield all([takeLatest(game.ActionTypes.KICKOFF_PLAYER, kickOffPlayer)])
  yield all([takeLatest(invite.ActionTypes.DECLINE_INVITE, declineInvite)])
  yield all([takeLatest(invite.ActionTypes.ACCEPT_INVITE, acceptInvite)])
  yield all([takeLatest(game.ActionTypes.UPDATE_GAME_VIEW, updateGameView)])
  yield all([takeLatest(settings.ActionTypes.GET_ABOUT_APP, getAboutApp)])
  yield all([takeLatest(settings.ActionTypes.GET_SUPPORT_DATA, getSupportData)])
}

export type RootSaga = ReturnType<typeof root>
