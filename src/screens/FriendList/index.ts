import FriendList from './FriendList'

import { connect } from 'react-redux'
import { IState, IFriendListTypesProps } from './FriendListTypes'
import { Dispatch } from 'redux'
import { appAction, friendsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IFriendListTypesProps}
 */
const mapStateToProps = (state: IState): IFriendListTypesProps => ({
  language: state?.settings?.language,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IFriendListTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IFriendListTypesProps => ({
  addFriend: (userId: string) => dispatch(friendsAction.addFriend(userId)),
  deleteFriend: (userId: string) =>
    dispatch(friendsAction.deleteFriend(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
