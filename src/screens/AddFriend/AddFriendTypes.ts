import { friends } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
}

interface IDispatchToProps {
  addFriend?: (userId: string) => friends.IAction
}

export interface IState {
  friends?: friends.IInitialState
}

export type IAddFriendTypesProps = IStateToProps & IDispatchToProps
