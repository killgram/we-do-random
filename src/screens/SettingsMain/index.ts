import SettingsMain from './SettingsMain'

import { connect } from 'react-redux'
import { IState, ISettingsMainScreenTypesProps } from './SettingsMainTypes'

/**
 * @param {IState} state
 * @return {IProfileMainScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISettingsMainScreenTypesProps => ({
  language: state?.settings?.language,
})

export default connect(mapStateToProps)(SettingsMain)
