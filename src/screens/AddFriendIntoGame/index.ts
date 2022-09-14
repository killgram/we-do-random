import AddFriendIntoGame from './AddFriendIntoGame'

import { connect } from 'react-redux'
import { IState, IAddFriendIntoGameTypesProps } from './AddFriendIntoGameTypes'
import { Dispatch } from 'redux'
import { friendsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IAddFriendIntoGameTypesProps}
 */
const mapStateToProps = (state: IState): IAddFriendIntoGameTypesProps => ({
  friendsList: state?.friends?.list,
  game: state?.game,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IAddFriendIntoGameTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IAddFriendIntoGameTypesProps => ({
  updateFriendStatus: (userId: string, isOnline: boolean) =>
    dispatch(friendsAction.updateFriendStatus(userId, isOnline)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendIntoGame)
