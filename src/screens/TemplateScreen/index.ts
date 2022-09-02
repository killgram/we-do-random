import TemplateScreen from './TemplateScreen'

import { connect } from 'react-redux'
import { IState, ITemplateScreenProps } from './TemplateScreenTypes'

/**
 * @param {IState} state
 * @return {ITemplateScreenProps}
 */
const mapStateToProps = (state: IState): ITemplateScreenProps => ({
  language: state?.settings?.language,
})

export default connect(mapStateToProps)(TemplateScreen)
