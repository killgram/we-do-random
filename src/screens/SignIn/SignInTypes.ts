import { settings } from '@store/types'

interface IStateToProps {
  language?: string
}

export interface IState {
  settings?: settings.IInitialState
}

interface IDispatchToProps {
  setLanguage?: (language: string) => settings.IAction
}

export type ISignInScreenTypesProps = IDispatchToProps & IStateToProps
