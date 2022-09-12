import { game } from '@store/types'

const initialState: game.IInitialState = {}

/**
 *
 * @param {game.IInitialState} state
 * @param {game.IAction} action
 * @return {game.IInitialState}
 */
const gameReducer = (
  state: game.IInitialState = initialState,
  action: game.IAction,
): game.IInitialState => {
  switch (action.type) {
    case game.ActionTypes.CLEAN_GAME: {
      return {}
    }
    case game.ActionTypes.ON_CREATE_GAME_SUCCESS: {
      return {
        ...state,
        gameType: action.gameType,
        gameName: action.gameName,
        gameLead: action.gameLead,
      }
    }

    default: {
      return state
    }
  }
}

export default gameReducer
