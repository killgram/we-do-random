import { app, settings } from '@store/types'

interface IStateToProps {
  language?: string
  isLoading?: boolean
}

export interface IState {
  settings?: settings.IInitialState
  app?: app.IInitialState
}

interface IDispatchToProps {
  setLanguage?: (language: string) => settings.IAction
  login?: (username: string) => app.IAction
}

export type ISignInScreenTypesProps = IDispatchToProps & IStateToProps
