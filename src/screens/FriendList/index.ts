import FriendList from './FriendList'

import { connect } from 'react-redux'
import { IState, IFriendListTypesProps } from './FriendListTypes'
import { Dispatch } from 'redux'
import { friendsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IFriendListTypesProps}
 */
const mapStateToProps = (state: IState): IFriendListTypesProps => ({
  friendsList: state?.friends?.list,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IFriendListTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IFriendListTypesProps => ({
  deleteFriend: (userId: string) =>
    dispatch(friendsAction.deleteFriend(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
