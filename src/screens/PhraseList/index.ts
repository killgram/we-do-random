import PhraseList from './PhraseList'

import { connect } from 'react-redux'
import { IState, IPhraseListTypesProps } from './PhraseListTypes'
import { Dispatch } from 'redux'
import { appAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IPhraseListTypesProps}
 */
const mapStateToProps = (state: IState): IPhraseListTypesProps => ({
  language: state?.settings?.language,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IPhraseListTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IPhraseListTypesProps => ({
  logout: () => dispatch(appAction.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhraseList)
