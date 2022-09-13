import { call, put, select } from 'redux-saga/effects'
import { settingsAction } from '@store/actions'
import { setLocale } from '@utils'
import { Constants } from '@configurations'
import { Navigate } from '@navigators'

export function* startup(): any {
  const state = yield select()
  const isAuthorized = state?.app?.isAuthorized
  const lang = state?.settings?.language

  const isPlay = state?.game?.gameType

  if (!lang) {
    yield put(settingsAction.setLanguage(Constants.APP_DEFAULT_LANG))
    yield call(setLocale, Constants.APP_DEFAULT_LANG)
  } else {
    yield call(setLocale, lang)
  }

  if (isAuthorized) {
    yield call(Navigate.toAppStack)

    if (isPlay) {
      isPlay === 'single'
        ? yield call(Navigate.toSingleGameBoard)
        : yield call(Navigate.toTeamGameInvitePlayers)
    }
  } else {
    yield call(Navigate.toAuthStack)
  }
}
