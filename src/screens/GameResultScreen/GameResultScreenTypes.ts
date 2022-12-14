import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  game?: game.IInitialState
  userId?: string
  username?: string
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
  kickOffPlayer?: (leadUserId: string, userId: string) => game.IAction
}

export interface IState {
  game?: game.IInitialState
  profile?: profile.IInitialState
}

export type IGameResultScreenScreenProps = IStateToProps & IDispatchToProps
