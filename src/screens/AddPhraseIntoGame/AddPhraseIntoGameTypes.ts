import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  username?: string
  userId?: string
  game?: game.IInitialState
}

interface IDispatchToProps {
  addPhraseIntoGame?: (
    username: string,
    userId: string,
    phrase: string,
  ) => game.IAction
}

export interface IState {
  profile?: profile.IInitialState
  game?: game.IInitialState
}

export type IAddPhraseIntoGameScreenProps = IStateToProps & IDispatchToProps
