import { NavigationType } from '@navigators'

import { settings } from '@store/types'
import { IAboutApp } from '@store/types/settings/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  aboutApp?: IAboutApp
  isLoading?: boolean
}

interface IDispatchToProps {
  getAboutApp?: () => settings.IAction
}

export interface IState {
  settings?: settings.IInitialState
}

export type IAboutAppScreenProps = IStateToProps & IDispatchToProps
