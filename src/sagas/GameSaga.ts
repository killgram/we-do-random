import { call, put } from 'redux-saga/effects'
import { ICreateGame } from '@store/types/game/Interfaces'
import { errorToast } from '@utils'
import { gameAction } from '@store/actions'
import { Navigate } from '@navigators'

export function* createGame(action: ICreateGame): any {
  const { gameName, gameType, gameLead } = action

  try {
    if (gameType === 'single') {
      yield put(gameAction.onCreateGameSuccess(gameType, gameName, gameLead))
      yield call(Navigate.toSingleGameBoard, gameName!)
    } else {
      yield put(gameAction.onCreateGameSuccess(gameType, gameName, gameLead))
      yield call(Navigate.toTeamGameInvitePlayers, gameName!)
      // TODO add firestore logic here for team game
    }
  } catch (e) {
    yield call(errorToast, "Can't create game")
  }
}
