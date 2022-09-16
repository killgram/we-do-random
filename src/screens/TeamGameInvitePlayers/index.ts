import TeamGameInvitePlayers from './TeamGameInvitePlayers'

import { connect } from 'react-redux'
import {
  IState,
  ITeamGameInvitePlayersScreenProps,
} from './TeamGameInvitePlayersTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'
import { IGameStatus, IPlayers } from '@store/types/game/Interfaces'
import { game } from '@store/types'

/**
 * @param {IState} state
 * @return {ITeamGameInvitePlayersScreenProps}
 */
const mapStateToProps = (state: IState): ITeamGameInvitePlayersScreenProps => ({
  userId: state?.profile?.userId,
  game: state?.game,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ITeamGameInvitePlayersScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ITeamGameInvitePlayersScreenProps => ({
  cleanGame: () => dispatch(gameAction.cleanGame()),
  kickOffPlayer: (leadUserId: string, userId: string) =>
    dispatch(gameAction.kickOffPlayer(leadUserId, userId)),
  updateGameStatus: (gameStatus: IGameStatus) =>
    dispatch(gameAction.updateGameStatus(gameStatus)),
  updateGameView: (data: game.IInitialState) =>
    dispatch(gameAction.updateGameView(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamGameInvitePlayers)
