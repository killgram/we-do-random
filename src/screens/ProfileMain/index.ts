import ProfileMain from './ProfileMain'

import { connect } from 'react-redux'
import { IState, IProfileMainScreenTypesProps } from './ProfileMainTypes'

/**
 * @param {IState} state
 * @return {IProfileMainScreenTypesProps}
 */
const mapStateToProps = (state: IState): IProfileMainScreenTypesProps => ({
  username: state?.profile?.username,
  userId: state?.profile?.userId,
})

export default connect(mapStateToProps)(ProfileMain)
