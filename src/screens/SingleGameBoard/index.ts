import SingleGameBoard from './SingleGameBoard'

import { connect } from 'react-redux'
import { IState, ISingleGameBoardScreenProps } from './SingleGameBoardTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ISingleGameBoardScreenProps}
 */
const mapStateToProps = (state: IState): ISingleGameBoardScreenProps => ({
  game: state?.game,
  phraseList: state?.game?.list,
  userId: state?.profile?.userId,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISingleGameBoardScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): ISingleGameBoardScreenProps => ({
  cleanGame: () => dispatch(gameAction.cleanGame()),
  deletePhraseOutGame: (phraseId: number) =>
    dispatch(gameAction.deletePhraseOutGame(phraseId)),
  startFinishGame: () => dispatch(gameAction.startFinishGame()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleGameBoard)
