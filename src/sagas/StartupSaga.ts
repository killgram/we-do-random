import { call, put, select } from 'redux-saga/effects'
import { settingsAction } from '@store/actions'

export function* startup(): any {
  const state = yield select()
  const lang = state?.settings?.language

  // setup language
  if (!lang) {
    yield put(settingsAction.setLanguage('ru'))
  }
}
