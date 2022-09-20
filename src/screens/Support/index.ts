import Support from './Support'

import { connect } from 'react-redux'
import { IState, ISupportScreenProps } from './SupportTypes'
import { Dispatch } from 'redux'
import { settingsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ISupportScreenProps}
 */
const mapStateToProps = (state: IState): ISupportScreenProps => ({
  supportData: state?.settings?.supportData,
  isLoading: state?.settings?.isLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISupportScreenProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ISupportScreenProps => ({
  getSupportData: () => dispatch(settingsAction.getSupportData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Support)
