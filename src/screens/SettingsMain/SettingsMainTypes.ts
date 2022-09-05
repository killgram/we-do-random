import { settings } from '@store/types'

export interface ISettingsMainScreenTypesProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}
