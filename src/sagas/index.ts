import { takeLatest, all } from 'redux-saga/effects'
import { settings } from '@store/types'

/**
 * @description initialize root saga
 */
export default function* root(): any {}

export type RootSaga = ReturnType<typeof root>
