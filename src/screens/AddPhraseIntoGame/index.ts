import AddPhraseIntoGame from './AddPhraseIntoGame'

import { connect } from 'react-redux'
import { IState, IAddPhraseIntoGameScreenProps } from './AddPhraseIntoGameTypes'
import { Dispatch } from 'redux'
import { gameAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IAddPhraseIntoGameScreenProps}
 */
const mapStateToProps = (state: IState): IAddPhraseIntoGameScreenProps => ({
  username: state?.profile?.username,
  userId: state?.profile?.userId,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {IAddPhraseIntoGameScreenProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IAddPhraseIntoGameScreenProps => ({
  addPhraseIntoGame: (username: string, userId: string, phrase: string) =>
    dispatch(gameAction.addPhraseIntoGame(username, userId, phrase)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPhraseIntoGame)
