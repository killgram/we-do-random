import ViewInvitePlayers from './ViewInvitePlayers'

import { connect } from 'react-redux'
import { IState, IViewInvitePlayersScreenProps } from './ViewInvitePlayersTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'
import { IPlayers } from '@store/types/game/Interfaces'
import { game } from '@store/types'

/**
 * @param {IState} state
 * @return {IViewInvitePlayersScreenProps}
 */
const mapStateToProps = (state: IState): IViewInvitePlayersScreenProps => ({
  userId: state?.profile?.userId,
  game: state?.game,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IViewInvitePlayersScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IViewInvitePlayersScreenProps => ({
  cleanGame: () => dispatch(gameAction.cleanGame()),
  updateInviteStatus: (playersList: Array<IPlayers>) =>
    dispatch(gameAction.updateInviteStatus(playersList)),
  updateGameView: (data: game.IInitialState) =>
    dispatch(gameAction.updateGameView(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewInvitePlayers)
