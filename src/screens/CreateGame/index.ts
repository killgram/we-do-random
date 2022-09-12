import CreateGame from './CreateGame'

import { connect } from 'react-redux'
import { IState, ICreateGameTypesProps } from './CreateGameTypes'
import { Dispatch } from 'redux'
import { appAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {ICreateGameTypesProps}
 */
const mapStateToProps = (state: IState): ICreateGameTypesProps => ({})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ICreateGameTypesProps}
 */
const mapDispatchToProps = (dispatch: Dispatch): ICreateGameTypesProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)
