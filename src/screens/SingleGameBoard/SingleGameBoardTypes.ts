import { game } from '@store/types'
import { NavigationType } from '@navigators'
import { IPhrase } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  game?: game.IInitialState
  phraseList?: Array<IPhrase>
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
  deletePhraseOutGame?: (phraseId: number) => game.IAction
}

export interface IState {
  game?: game.IInitialState
}

export type ISingleGameBoardScreenProps = IStateToProps & IDispatchToProps
