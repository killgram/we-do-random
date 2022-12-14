import GameResultScreen from './GameResultScreen'

import { connect } from 'react-redux'
import { IState, IGameResultScreenScreenProps } from './GameResultScreenTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IGameResultScreenScreenProps}
 */
const mapStateToProps = (state: IState): IGameResultScreenScreenProps => ({
  game: state?.game,
  userId: state?.profile?.userId,
  username: state?.profile?.username,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IGameResultScreenScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IGameResultScreenScreenProps => ({
  cleanGame: () => dispatch(gameAction.cleanGame()),
  kickOffPlayer: (leadUserId: string, userId: string) =>
    dispatch(gameAction.kickOffPlayer(leadUserId, userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameResultScreen)
