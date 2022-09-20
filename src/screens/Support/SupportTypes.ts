import { NavigationType } from '@navigators'

import { settings } from '@store/types'
import { ISupportData } from '@store/types/settings/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  supportData?: ISupportData
  isLoading?: boolean
}

interface IDispatchToProps {
  getSupportData?: () => settings.IAction
}

export interface IState {
  settings?: settings.IInitialState
}

export type ISupportScreenProps = IStateToProps & IDispatchToProps
