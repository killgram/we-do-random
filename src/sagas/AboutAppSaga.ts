import { call, put } from 'redux-saga/effects'
import { settingsAction } from '@store/actions'
import { dbGetAboutAppStatus } from '@services'
import { errorToast } from '@utils'

export function* getAboutApp(): any {
  try {
    const data = yield call(dbGetAboutAppStatus)
    yield put(settingsAction.getAboutAppSuccess(data?.data()))
  } catch (e) {
    yield call(errorToast, "Can't load about app")
  }
}
