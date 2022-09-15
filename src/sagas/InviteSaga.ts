import { call, put, select } from 'redux-saga/effects'
import { inviteAction } from '@store/actions'
import {
  dbRemovePlayer,
  dbDeleteInvite,
  dbUpdatePlayStatus,
  dbAcceptInvite,
} from '@services'
import { errorToast } from '@utils'
import { IAcceptInvite, IDeclineInvite } from '@store/types/invite/Interfaces'
import { Navigate } from '@navigators'

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

export function* acceptInvite(action: IAcceptInvite): any {
  const { leadId } = action
  const state = yield select()
  const userId = state?.profile?.userId

  try {
    const res = yield call(dbAcceptInvite, leadId!, userId)
    if (res) {
      yield call(dbUpdatePlayStatus, userId, true)
      yield call(dbDeleteInvite, userId)
      yield put(inviteAction.cleanInvite())
      yield call(Navigate.toViewInvitePlayers, leadId!)
    }
  } catch (e) {
    yield call(errorToast, "Can't accept")
  }
}
