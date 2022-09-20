import { call, put, select, delay } from 'redux-saga/effects'
import { appAction, gameAction, settingsAction } from '@store/actions'
import { setLocale } from '@utils'
import { Constants } from '@configurations'
import { Navigate } from '@navigators'
import { dbUpdatePlayStatus, dbCloseGame, dbGetAboutAppStatus } from '@services'
import DeviceInfo from 'react-native-device-info'

export function* startup(): any {
  const state = yield select()
  const isAuthorized = state?.app?.isAuthorized
  const lang = state?.settings?.language
  const userId = state?.profile?.userId
  const isPlay = state?.game?.gameType
  const isFinishedGame = state?.game?.finish?.username
  const gameStatus = state?.game?.gameStatus
  const version = state?.app?.version
  const moduleVersion = DeviceInfo.getVersion()

  if (!lang) {
    yield put(settingsAction.setLanguage(Constants.APP_DEFAULT_LANG))
    yield call(setLocale, Constants.APP_DEFAULT_LANG)
  } else {
    yield call(setLocale, lang)
  }

  const appData = yield call(dbGetAboutAppStatus)
  if (appData?.data()?.appVersion !== moduleVersion) {
    if (!version) {
      yield put(appAction.setAppVersion(moduleVersion))
    } else {
      yield delay(500)
      yield put(appAction.newAppVersion())
    }
  }

  if (isAuthorized) {
    yield call(Navigate.toAppStack)

    if (!isFinishedGame && isPlay) {
      if (isPlay === 'single') {
        yield call(Navigate.toSingleGameBoard)
      } else {
        const gameLeadId = state?.game?.gameLead?.userId
        if (userId === gameLeadId) {
          if (gameStatus === 'playing') {
            yield call(Navigate.toTeamGameBoard)
          } else {
            yield call(Navigate.toTeamGameInvitePlayers)
          }
        } else {
          if (gameStatus === 'playing') {
            yield call(Navigate.toTeamGameBoard)
          } else {
            yield call(Navigate.toViewInvitePlayers, gameLeadId)
          }
        }
      }
    }
    if (isFinishedGame) {
      yield call(dbUpdatePlayStatus, userId, false)
      yield call(dbCloseGame, userId)
      yield put(gameAction.cleanGame())
    }
  } else {
    yield call(Navigate.toAuthStack)
  }
}
