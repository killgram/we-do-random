import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import RootScreen from './RootScreen'
import { IState, IRootScreenProps } from './RootScreenTypes'

/**
 * @param {IState} state
 * @return {IRootScreenProps}
 */
const mapStateToProps = (state: IState): IRootScreenProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IRootScreenProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): IRootScreenProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
