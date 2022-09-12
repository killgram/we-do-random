import TeamGameBoard from './TeamGameBoard'

import { connect } from 'react-redux'
import { IState, ITeamGameBoardScreenProps } from './TeamGameBoardTypes'
import { Dispatch } from 'redux'

/**
 * @param {IState} state
 * @return {ITeamGameBoardScreenProps}
 */
const mapStateToProps = (state: IState): ITeamGameBoardScreenProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ITeamGameBoardScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ITeamGameBoardScreenProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TeamGameBoard)
