import GameMain from './GameMain'

import { connect } from 'react-redux'
import { IState, IGameMainScreenTypesProps } from './GameMainTypes'

/**
 * @param {IState} state
 * @return {IGameMainScreenTypesProps}
 */
const mapStateToProps = (state: IState): IGameMainScreenTypesProps => ({
  userId: state?.profile?.userId,
})

export default connect(mapStateToProps)(GameMain)
