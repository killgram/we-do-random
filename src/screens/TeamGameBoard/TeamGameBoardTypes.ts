import { settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
}

interface IDispatchToProps {}

export interface IState {
  settings?: settings.IInitialState
}

export type ITeamGameBoardScreenProps = IStateToProps & IDispatchToProps
