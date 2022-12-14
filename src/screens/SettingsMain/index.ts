import SettingsMain from './SettingsMain'

import { connect } from 'react-redux'
import { IState, ISettingsMainScreenTypesProps } from './SettingsMainTypes'
import { Dispatch } from 'redux'
import { appAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ISettingsMainScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISettingsMainScreenTypesProps => ({
  language: state?.settings?.language,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISettingsMainScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ISettingsMainScreenTypesProps => ({
  logout: () => dispatch(appAction.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMain)
