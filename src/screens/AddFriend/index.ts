import AddFriend from './AddFriend'

import { connect } from 'react-redux'
import { IState, IAddFriendTypesProps } from './AddFriendTypes'
import { Dispatch } from 'redux'
import { friendsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IAddFriendTypesProps}
 */
const mapStateToProps = (state: IState): IAddFriendTypesProps => ({
  isUpdate: state?.friends?.isUpdate,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IAddFriendTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IAddFriendTypesProps => ({
  addFriend: (userId: string) => dispatch(friendsAction.addFriend(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)
