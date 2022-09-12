import SingleGameBoard from './SingleGameBoard'

import { connect } from 'react-redux'
import { IState, ISingleGameBoardScreenProps } from './SingleGameBoardTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {ISingleGameBoardScreenProps}
 */
const mapStateToProps = (state: IState): ISingleGameBoardScreenProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISingleGameBoardScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ISingleGameBoardScreenProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SingleGameBoard)
