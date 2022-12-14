import { call, put, select } from 'redux-saga/effects'
import {
  IAddPlayer,
  ICreateGame,
  IKickOffPlayer,
  IUpdateGameView,
} from '@store/types/game/Interfaces'
import { errorToast, calcWinner, calcChance } from '@utils'
import { gameAction } from '@store/actions'
import { Navigate } from '@navigators'
import {
  dbUpdatePlayStatus,
  dbCreateGame,
  dbUpdatePlayers,
  dbRemovePlayer,
  dbCheckUser,
  dbSendInvite,
  dbDeleteInvite,
  dbUpdateGameStatus,
  dbFinishGame,
} from '@services'

/**
 * @description create game saga
 * @param {ICreateGame} action
 */
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
      const result = yield call(
        dbCreateGame,
        gameLead?.username!,
        gameLead?.userId!,
        gameName!,
        gameType!,
      )

      if (result) {
        yield put(
          gameAction.addPlayerSuccess(
            gameLead?.userId!,
            gameLead?.username!,
            gameLead?.userId!,
            true,
            true,
          ),
        )
        yield call(
          dbUpdatePlayers,
          gameLead?.userId!,
          gameLead?.username!,
          gameLead?.userId!,
          true,
          true,
        )
        yield put(gameAction.updateGameStatus('inviting'))
        yield call(dbUpdateGameStatus, gameLead?.userId!, 'inviting')
        yield call(Navigate.toTeamGameInvitePlayers)
      }
    }
  } catch (e) {
    yield call(errorToast, "Can't create game")
  }
}

/**
 * @description start finish game saga
 */
export function* startFinishGame(): any {
  const state = yield select()
  const game = state?.game
  const phraseList = state?.game?.list
  try {
    const winner = yield call(calcWinner, phraseList)
    const chance = yield call(
      calcChance,
      phraseList,
      state?.profile?.userId,
      game?.gameType,
    )

    yield put(
      gameAction.gameFinishSuccess(winner.username, winner.phrase, chance),
    )

    if (game?.gameType === 'team') {
      yield call(
        dbFinishGame,
        game?.gameLead?.userId,
        chance,
        winner.username,
        winner.phrase,
      )
    }
    yield call(Navigate.toGameResultScreen)
  } catch (e) {
    yield call(errorToast, "Can't finish game")
  }
}

/**
 * @description add player saga
 * @param {IAddPlayer} action
 */
export function* addPlayer(action: IAddPlayer): any {
  const { userId, leadUserId } = action
  const state = yield select()
  const game = state?.game

  try {
    const addUser = yield call(dbCheckUser, userId!)

    const playersList = state?.game?.playersList
    for (let i = 0; i < playersList.length; i++) {
      if (playersList[i].userId === userId) {
        yield call(errorToast, 'Already playing')
        return
      }
    }

    if (addUser.data()?.username) {
      if (addUser.data()?.isPlay) {
        yield call(errorToast, 'Player in another game')
        return
      }

      yield call(
        dbUpdatePlayers,
        leadUserId!,
        addUser.data().username,
        userId!,
        addUser.data().isOnline,
        false,
      )
      yield put(
        gameAction.addPlayerSuccess(
          leadUserId!,
          addUser.data().username,
          userId!,
          addUser.data().isOnline,
          false,
        ),
      )

      yield call(
        dbSendInvite,
        userId!,
        game?.gameLead?.username,
        game?.gameLead?.userId,
        game?.gameName,
      )

      yield call(Navigate.goBack)
    } else {
      yield call(errorToast, 'Player does not exist')
    }
  } catch (e) {
    yield call(errorToast, "Can't add player")
  }
}

/**
 * @description kick off player saga
 * @param {IKickOffPlayer} action
 */
export function* kickOffPlayer(action: IKickOffPlayer): any {
  const { userId, leadUserId } = action

  try {
    yield put(gameAction.kickOffPlayerSuccess(leadUserId!, userId!))
    const result = yield call(dbRemovePlayer, leadUserId!, userId!)
    if (result) {
      yield call(dbDeleteInvite, userId!)
    }
  } catch (e) {
    yield call(errorToast, 'Game over. For you')
  }
}

/**
 * @description update game view saga
 * @param {IUpdateGameView} action
 */
export function* updateGameView(action: IUpdateGameView): any {
  const { data } = action
  const state = yield select()

  try {
    if (data) {
      yield put(gameAction.updateGameViewSuccess(data))
    } else {
      yield call(dbUpdatePlayStatus, state?.profile?.userId, false)
      yield put(gameAction.cleanGame())
      yield call(Navigate.toAppStack)
      yield call(errorToast, 'Game over')
    }
  } catch (e) {
    yield call(errorToast, "Can't update game")
  }
}
