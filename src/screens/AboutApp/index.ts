import AboutApp from './AboutApp'

import { connect } from 'react-redux'
import { IState, IAboutAppScreenProps } from './AboutAppTypes'
import { Dispatch } from 'redux'
import { settingsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IAboutAppScreenProps}
 */
const mapStateToProps = (state: IState): IAboutAppScreenProps => ({
  aboutApp: state?.settings?.aboutApp,
  isLoading: state?.settings?.isLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IAboutAppScreenProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IAboutAppScreenProps => ({
  getAboutApp: () => dispatch(settingsAction.getAboutApp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutApp)
