import { game } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
}

export interface IState {}

export type ITeamGameInvitePlayersScreenProps = IStateToProps & IDispatchToProps
