import { settings } from '@store/types'

export interface IGameMainScreenTypesProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}
