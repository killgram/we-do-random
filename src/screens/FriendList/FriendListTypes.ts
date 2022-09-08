import { settings, friends } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  language?: string
  navigation?: NavigationType
}

interface IDispatchToProps {
  addFriend?: (userId: string) => friends.IAction
  deleteFriend?: (userId: string) => friends.IAction
}

export interface IState {
  settings?: settings.IInitialState
  friends?: friends.IInitialState
}

export type IFriendListTypesProps = IStateToProps & IDispatchToProps
