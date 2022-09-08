import FriendList from './FriendList'

import { connect } from 'react-redux'
import { IState, IFriendListTypesProps } from './FriendListTypes'
import { Dispatch } from 'redux'
import { appAction } from '@store/actions'

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
  logout: () => dispatch(appAction.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
