import SignIn from './SignIn'

import { connect } from 'react-redux'
import { IState, ISignInScreenTypesProps } from './SignInTypes'
import { Dispatch } from 'redux'

import { appAction, settingsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ISignInScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISignInScreenTypesProps => ({
  language: state?.settings?.language,
  isLoading: state?.app?.isLoading,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISignInScreenTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ISignInScreenTypesProps => ({
  setLanguage: (language: string) =>
    dispatch(settingsAction.setLanguage(language)),
  login: (username: string) => dispatch(appAction.login(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
