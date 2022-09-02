import { settings } from '@store/types'

export interface IBlankScreenTypesProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}
