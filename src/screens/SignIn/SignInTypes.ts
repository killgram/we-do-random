import { settings } from '@store/types'

export interface ISignInScreenTypesProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}
