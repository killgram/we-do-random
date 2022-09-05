import { settings } from '@store/types'

interface IStateToProps {
  language?: string
}

interface IDispatchToProps {
  logout?: () => void
}

export interface IState {
  settings?: settings.IInitialState
}

export type ISettingsMainScreenTypesProps = IStateToProps & IDispatchToProps
