import SignIn from './SignIn'

import { connect } from 'react-redux'
import { IState, ISignInScreenTypesProps } from './SignInTypes'

/**
 * @param {IState} state
 * @return {ISignInScreenTypesProps}
 */
const mapStateToProps = (state: IState): ISignInScreenTypesProps => ({
  language: state?.settings?.language,
})

export default connect(mapStateToProps)(SignIn)
