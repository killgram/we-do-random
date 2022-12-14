import ViewInvitePlayers from './ViewInvitePlayers'

import { connect } from 'react-redux'
import { IState, IViewInvitePlayersScreenProps } from './ViewInvitePlayersTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'
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
  updateGameView: (data: game.IInitialState) =>
    dispatch(gameAction.updateGameView(data)),
  kickOffPlayer: (leadUserId: string, userId: string) =>
    dispatch(gameAction.kickOffPlayer(leadUserId, userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewInvitePlayers)
