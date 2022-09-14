import AddPlayersIntoGame from './AddPlayersIntoGame'

import { connect } from 'react-redux'
import {
  IState,
  IAddPlayersIntoGameScreenProps,
} from './AddPlayersIntoGameTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IAddPlayersIntoGameScreenProps}
 */
const mapStateToProps = (state: IState): IAddPlayersIntoGameScreenProps => ({
  userId: state?.profile?.userId,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IAddPlayersIntoGameScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IAddPlayersIntoGameScreenProps => ({
  addPlayer: (leadUserId: string, userId: string) =>
    dispatch(gameAction.addPlayer(leadUserId, userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayersIntoGame)
