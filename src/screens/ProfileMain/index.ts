import ProfileMain from './ProfileMain'

import { connect } from 'react-redux'
import { IState, IProfileMainScreenTypesProps } from './ProfileMainTypes'

/**
 * @param {IState} state
 * @return {IProfileMainScreenTypesProps}
 */
const mapStateToProps = (state: IState): IProfileMainScreenTypesProps => ({
  language: state?.settings?.language,
})

export default connect(mapStateToProps)(ProfileMain)
