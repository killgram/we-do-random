import GameMain from './GameMain'

import { connect } from 'react-redux'
import { IState, IGameMainScreenTypesProps } from './GameMainTypes'
import { Dispatch } from 'redux'
import { inviteAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IGameMainScreenTypesProps}
 */
const mapStateToProps = (state: IState): IGameMainScreenTypesProps => ({
  userId: state?.profile?.userId,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IGameMainScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IGameMainScreenTypesProps => ({
  incomingInvite: (leaderName: string, leadId: string, gameName: string) =>
    dispatch(inviteAction.incomingInvite(leaderName, leadId, gameName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameMain)
