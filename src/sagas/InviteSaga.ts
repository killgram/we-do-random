import { call, put, select } from 'redux-saga/effects'
import { inviteAction } from '@store/actions'
import { dbRemovePlayer, dbDeleteInvite } from '@services'
import { errorToast } from '@utils'
import { IDeclineInvite } from '@store/types/invite/Interfaces'

export function* declineInvite(action: IDeclineInvite): any {
  const { leadId } = action
  const state = yield select()
  const userId = state?.profile?.userId

  try {
    const res = yield call(dbRemovePlayer, leadId!, userId)
    if (res) {
      yield call(dbDeleteInvite, userId)
      yield put(inviteAction.cleanInvite())
    }
  } catch (e) {
    yield call(errorToast, "Can't decline")
  }
}
