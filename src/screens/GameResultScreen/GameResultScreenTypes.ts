import { game } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  game?: game.IInitialState
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
}

export interface IState {
  game?: game.IInitialState
}

export type IGameResultScreenScreenProps = IStateToProps & IDispatchToProps
