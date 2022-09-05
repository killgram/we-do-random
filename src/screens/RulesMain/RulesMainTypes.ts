import { settings } from '@store/types'

export interface IRulesMainScreenTypesProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}
