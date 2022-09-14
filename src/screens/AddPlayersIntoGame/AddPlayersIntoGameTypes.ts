import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  userId?: string
}

interface IDispatchToProps {
  addPlayer?: (leadUserId: string, userId: string) => game.IAction
}

export interface IState {
  profile?: profile.IInitialState
}

export type IAddPlayersIntoGameScreenProps = IStateToProps & IDispatchToProps
