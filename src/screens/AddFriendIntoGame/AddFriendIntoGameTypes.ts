import { friends, game } from '@store/types'
import { NavigationType } from '@navigators'
import { IFriendList } from '@store/types/friends/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  friendsList?: Array<IFriendList>
  route?: {
    params: {
      goBackScreen?: (s: string) => void
    }
  }
  game?: game.IInitialState
}

interface IDispatchToProps {
  updateFriendStatus?: (userId: string, isOnline: boolean) => friends.IAction
}

export interface IState {
  friends?: friends.IInitialState
  game?: game.IInitialState
}

export type IAddFriendIntoGameTypesProps = IStateToProps & IDispatchToProps
