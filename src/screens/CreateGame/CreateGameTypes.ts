import { game, profile } from '@store/types'
import { NavigationType } from '@navigators'
import { IUser } from '@store/types/game/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  route?: {
    params: {
      type: 'single' | 'team'
    }
  }
  username?: string
  userId?: string
}

interface IDispatchToProps {
  createGame?: (
    gameType: string,
    gameName: string,
    gameLead: IUser,
  ) => game.IAction
}

export interface IState {
  profile?: profile.IInitialState
}

export type ICreateGameTypesProps = IStateToProps & IDispatchToProps
