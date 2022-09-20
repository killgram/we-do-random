import { call, put } from 'redux-saga/effects'
import { settingsAction } from '@store/actions'
import { dbGetSupportData, dbSupportInfoData } from '@services'
import { errorToast } from '@utils'

export function* getSupportData(): any {
  try {
    let data = {}
    const dbData = yield call(dbGetSupportData)
    const supportInfo = yield call(dbSupportInfoData)
    data = {
      ...dbData?.data(),
      ...supportInfo?.data?.data,
    }
    yield put(settingsAction.getSupportDataSuccess(data))
  } catch (e) {
    yield call(errorToast, "Can't load support data")
  }
}
