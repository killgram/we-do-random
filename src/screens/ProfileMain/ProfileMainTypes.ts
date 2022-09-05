import { settings } from '@store/types'

export interface IProfileMainScreenTypesProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}
