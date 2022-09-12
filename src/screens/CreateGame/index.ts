import CreateGame from './CreateGame'

import { connect } from 'react-redux'
import { IState, ICreateGameTypesProps } from './CreateGameTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'
import { IUser } from '@store/types/game/Interfaces'

/**
 * @param {IState} state
 * @return {ICreateGameTypesProps}
 */
const mapStateToProps = (state: IState): ICreateGameTypesProps => ({
  username: state?.profile?.username,
  userId: state?.profile?.userId,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ICreateGameTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ICreateGameTypesProps => ({
  createGame: (gameType: string, gameName: string, gameLead: IUser) =>
    dispatch(gameAction.createGame(gameType, gameName, gameLead)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)
