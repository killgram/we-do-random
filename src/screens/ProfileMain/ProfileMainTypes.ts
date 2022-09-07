import { profile } from '@store/types'

export interface IProfileMainScreenTypesProps {
  username?: string
  userId?: string
}

export interface IState {
  profile?: profile.IInitialState
}
