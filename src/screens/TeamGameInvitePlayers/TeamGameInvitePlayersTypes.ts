import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  userId?: string
  game?: game.IInitialState
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
  kickOffPlayer?: (leadUserId: string, userId: string) => game.IAction
}

export interface IState {
  profile?: profile.IInitialState
  game?: game.IInitialState
}

export type ITeamGameInvitePlayersScreenProps = IStateToProps & IDispatchToProps
