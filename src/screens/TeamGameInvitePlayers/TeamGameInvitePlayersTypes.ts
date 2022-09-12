import { game } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  route?: {
    params: {
      gameName: string
    }
  }
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
}

export interface IState {}

export type ITeamGameInvitePlayersScreenProps = IStateToProps & IDispatchToProps
