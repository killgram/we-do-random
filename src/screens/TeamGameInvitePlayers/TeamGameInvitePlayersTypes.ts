import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'
import { IPlayers } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  userId?: string
  game?: game.IInitialState
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
  kickOffPlayer?: (leadUserId: string, userId: string) => game.IAction
  updateInviteStatus?: (playersList: Array<IPlayers>) => game.IAction
}

export interface IState {
  profile?: profile.IInitialState
  game?: game.IInitialState
}

export type ITeamGameInvitePlayersScreenProps = IStateToProps & IDispatchToProps
