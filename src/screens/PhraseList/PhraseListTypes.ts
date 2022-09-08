import { settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  language?: string
  navigation?: NavigationType
}

interface IDispatchToProps {
  logout?: () => void
}

export interface IState {
  settings?: settings.IInitialState
}

export type IPhraseListTypesProps = IStateToProps & IDispatchToProps
