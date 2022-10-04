import { game } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  game?: game.IInitialState
}

export interface IState {
  game?: game.IInitialState
}

export type IViewPhraseListScreenProps = IStateToProps
