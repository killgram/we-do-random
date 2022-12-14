import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import RootScreen from './RootScreen'
import { IState, IRootScreenProps } from './RootScreenTypes'
import { appAction, inviteAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IRootScreenProps}
 */
const mapStateToProps = (state: IState): IRootScreenProps => ({
  invite: state?.invite,
  updateModal: state?.app?.updateModal,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IRootScreenProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IRootScreenProps => ({
  startup: () => dispatch(appAction.startup()),
  declineInvite: (leadId: string) =>
    dispatch(inviteAction.declineInvite(leadId)),
  acceptInvite: (leadId: string) => dispatch(inviteAction.acceptInvite(leadId)),
  cleanNewAppVersion: () => dispatch(appAction.cleanNewAppVersion()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
