import { game } from '@store/types'
import { keyGenerate } from '@utils'

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
    case game.ActionTypes.ADD_PHRASE_INTO_GAME: {
      const oldState = { ...state }
      const oldList = [...(state?.list || [])]
      const newPhraseList = {
        username: action.username,
        userId: action.userId,
        phrase: action.phrase,
        phraseId: keyGenerate() * 10 ** 10,
      }
      oldState.list = oldList.concat([newPhraseList])
      return {
        ...oldState,
      }
    }
    case game.ActionTypes.DELETE_PHRASE_OUT_GAME: {
      const oldState = { ...state }
      const oldList = [...(state?.list || [])]
      oldState.list = oldList.filter((item) => {
        return item.phraseId !== action.phraseId
      })
      return {
        ...oldState,
      }
    }

    // finish
    case game.ActionTypes.START_FINISH_GAME: {
      const oldState = { ...state }
      const oldFinish = { ...state?.finish }
      oldFinish.isLoading = true
      oldState.finish = oldFinish

      return {
        ...oldState,
      }
    }
    case game.ActionTypes.GAME_FINISH_SUCCESS: {
      const oldState = { ...state }
      const oldFinish = { ...state?.finish }
      oldFinish.username = action.username
      oldFinish.phrase = action.phrase
      oldFinish.chance = action.chance
      delete oldFinish.isLoading
      oldState.finish = oldFinish
      return {
        ...oldState,
      }
    }

    // team
    case game.ActionTypes.ADD_PLAYER_SUCCESS: {
      const oldState = { ...state }
      const oldList = [...(state?.playersList || [])]
      const newPlayer = {
        username: action.username,
        userId: action.userId,
        isOnline: action.isOnline,
      }
      oldState.playersList = oldList.concat([newPlayer])
      return {
        ...oldState,
      }
    }

    case game.ActionTypes.KICKOFF_PLAYER_SUCCESS: {
      const oldState = { ...state }
      const oldPlayerList = [...(state?.playersList || [])]
      oldState.playersList = oldPlayerList.filter((item) => {
        return item.userId !== action.userId
      })
      return {
        ...oldState,
      }
    }

    default: {
      return state
    }
  }
}

export default gameReducer
