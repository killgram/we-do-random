import TeamGameInvitePlayers from './TeamGameInvitePlayers'

import { connect } from 'react-redux'
import {
  IState,
  ITeamGameInvitePlayersScreenProps,
} from './TeamGameInvitePlayersTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'
import { IGameStatus, IPlayers } from '@store/types/game/Interfaces'

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
  updateInviteStatus: (playersList: Array<IPlayers>) =>
    dispatch(gameAction.updateInviteStatus(playersList)),
  updateGameStatus: (gameStatus: IGameStatus) =>
    dispatch(gameAction.updateGameStatus(gameStatus)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamGameInvitePlayers)
