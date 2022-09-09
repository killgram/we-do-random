import { friends } from '@store/types'
import { NavigationType } from '@navigators'
import { IFriendList } from '@store/types/friends/Interfaces'

interface IStateToProps {
  navigation?: NavigationType
  friendsList?: Array<IFriendList>
}

interface IDispatchToProps {
  deleteFriend?: (userId: string) => friends.IAction
  updateFriendStatus?: (userId: string, isOnline: boolean) => friends.IAction
}

export interface IState {
  friends?: friends.IInitialState
}

export type IFriendListTypesProps = IStateToProps & IDispatchToProps
