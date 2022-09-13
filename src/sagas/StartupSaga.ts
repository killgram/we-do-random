import { call, put, select } from 'redux-saga/effects'
import { gameAction, settingsAction } from '@store/actions'
import { setLocale } from '@utils'
import { Constants } from '@configurations'
import { Navigate } from '@navigators'

export function* startup(): any {
  const state = yield select()
  const isAuthorized = state?.app?.isAuthorized
  const lang = state?.settings?.language

  const isPlay = state?.game?.gameType
  const isFinishedGame = state?.game?.finish?.username

  if (!lang) {
    yield put(settingsAction.setLanguage(Constants.APP_DEFAULT_LANG))
    yield call(setLocale, Constants.APP_DEFAULT_LANG)
  } else {
    yield call(setLocale, lang)
  }

  if (isAuthorized) {
    yield call(Navigate.toAppStack)

    if (!isFinishedGame && isPlay) {
      isPlay === 'single'
        ? yield call(Navigate.toSingleGameBoard)
        : yield call(Navigate.toTeamGameInvitePlayers)
    }
    if (isFinishedGame) {
      yield put(gameAction.cleanGame())
    }
  } else {
    yield call(Navigate.toAuthStack)
  }
}
