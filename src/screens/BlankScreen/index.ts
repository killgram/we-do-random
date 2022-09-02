import BlankScreen from './BlankScreen'

import { connect } from 'react-redux'
import { IState, IBlankScreenTypesProps } from './BlankScreenTypes'

/**
 * @param {IState} state
 * @return {IBlankScreenTypesProps}
 */
const mapStateToProps = (state: IState): IBlankScreenTypesProps => ({
  language: state?.settings?.language,
})

export default connect(mapStateToProps)(BlankScreen)
