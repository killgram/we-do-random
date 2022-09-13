import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  game?: game.IInitialState
  userId?: string
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
}

export interface IState {
  game?: game.IInitialState
  profile?: profile.IInitialState
}

export type IGameResultScreenScreenProps = IStateToProps & IDispatchToProps
