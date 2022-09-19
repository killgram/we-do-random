import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'
import { IGameStatus } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  userId?: string
  game?: game.IInitialState
}

interface IDispatchToProps {
  cleanGame?: () => game.IAction
  updateGameStatus?: (gameStatus: IGameStatus) => game.IAction
  updateGameView?: (data: game.IInitialState) => game.IAction
  startFinishGame?: () => game.IAction
  kickOffPlayer?: (leadUserId: string, userId: string) => game.IAction
}

export interface IState {
  profile?: profile.IInitialState
  game?: game.IInitialState
}

export type ITeamGameBoardScreenProps = IStateToProps & IDispatchToProps
