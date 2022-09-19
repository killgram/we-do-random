import TeamGameBoard from './TeamGameBoard'

import { connect } from 'react-redux'
import { IState, ITeamGameBoardScreenProps } from './TeamGameBoardTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'
import { IGameStatus } from '@store/types/game/Interfaces'
import { game } from '@store/types'

/**
 * @param {IState} state
 * @return {ITeamGameBoardScreenProps}
 */
const mapStateToProps = (state: IState): ITeamGameBoardScreenProps => ({
  userId: state?.profile?.userId,
  game: state?.game,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ITeamGameBoardScreenProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ITeamGameBoardScreenProps => ({
  cleanGame: () => dispatch(gameAction.cleanGame()),
  updateGameStatus: (gameStatus: IGameStatus) =>
    dispatch(gameAction.updateGameStatus(gameStatus)),
  updateGameView: (data: game.IInitialState) =>
    dispatch(gameAction.updateGameView(data)),
  startFinishGame: () => dispatch(gameAction.startFinishGame()),
  kickOffPlayer: (leadUserId: string, userId: string) =>
    dispatch(gameAction.kickOffPlayer(leadUserId, userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamGameBoard)
