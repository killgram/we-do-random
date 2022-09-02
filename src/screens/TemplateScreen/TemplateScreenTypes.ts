import { settings } from '@store/types'

export interface ITemplateScreenProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}
