import RulesMain from './RulesMain'

import { connect } from 'react-redux'
import { IState, IRulesMainScreenTypesProps } from './RulesMainTypes'

/**
 * @param {IState} state
 * @return {IRulesMainScreenTypesProps}
 */
const mapStateToProps = (state: IState): IRulesMainScreenTypesProps => ({
  language: state?.settings?.language,
})

export default connect(mapStateToProps)(RulesMain)
