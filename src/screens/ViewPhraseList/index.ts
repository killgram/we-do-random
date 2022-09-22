import ViewPhraseList from './ViewPhraseList'

import { connect } from 'react-redux'
import { IState, IViewPhraseListScreenProps } from './ViewPhraseListTypes'

/**
 * @param {IState} state
 * @return {IViewPhraseListScreenProps}
 */
const mapStateToProps = (state: IState): IViewPhraseListScreenProps => ({
  game: state?.game,
})

export default connect(mapStateToProps)(ViewPhraseList)
