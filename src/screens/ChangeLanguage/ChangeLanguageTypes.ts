import { settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  language?: string
  navigation?: NavigationType
}

interface IDispatchToProps {
  setLanguage?: (language: string) => settings.IAction
}

export interface IState {
  settings?: settings.IInitialState
}

export type IChangeLanguageScreenTypesProps = IStateToProps & IDispatchToProps
