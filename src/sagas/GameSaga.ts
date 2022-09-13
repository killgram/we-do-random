import { call, put, select } from 'redux-saga/effects'
import { ICreateGame } from '@store/types/game/Interfaces'
import { errorToast } from '@utils'
import { gameAction } from '@store/actions'
import { Navigate } from '@navigators'
import { dbUpdatePlayStatus } from '@services'

export function* createGame(action: ICreateGame): any {
  const { gameName, gameType, gameLead } = action
  const state = yield select()
  const userId = state?.profile?.userId

  try {
    yield put(gameAction.onCreateGameSuccess(gameType, gameName, gameLead))
    yield call(dbUpdatePlayStatus, userId, true)
    if (gameType === 'single') {
      yield call(Navigate.toSingleGameBoard)
    } else {
      yield call(Navigate.toTeamGameInvitePlayers)
      // TODO add firestore logic here for team game
    }
  } catch (e) {
    yield call(errorToast, "Can't create game")
  }
}
