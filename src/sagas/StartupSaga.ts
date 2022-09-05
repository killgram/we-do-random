import { call, put, select } from 'redux-saga/effects'
import { settingsAction } from '@store/actions'
import { setLocale } from '@utils'
import constants from '@configurations/Constants'

export function* startup(): any {
  const state = yield select()
  const lang = state?.settings?.language

  if (!lang) {
    yield put(settingsAction.setLanguage(constants.APP_DEFAULT_LANG))
    yield call(setLocale, constants.APP_DEFAULT_LANG)
  } else {
    yield call(setLocale, lang)
  }
}
