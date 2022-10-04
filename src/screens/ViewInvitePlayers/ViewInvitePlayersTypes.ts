import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  userId?: string
  game?: game.IInitialState
  route?: {
    params: {
      leadId: string
    }
  }
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
  updateGameView?: (data: game.IInitialState) => game.IAction
  kickOffPlayer?: (leadUserId: string, userId: string) => game.IAction
}

export interface IState {
  profile?: profile.IInitialState
  game?: game.IInitialState
}

export type IViewInvitePlayersScreenProps = IStateToProps & IDispatchToProps
