import { game } from '@store/types'
import { IUser } from '@store/types/game/Interfaces'

/**
 *
 * @return {game.IAction}
 */
export function cleanGame(): game.IAction {
  return {
    type: game.ActionTypes.CLEAN_GAME,
  }
}

/**
 *
 * @param {string} gameType
 * @param {string} gameName
 * @param {IUser} gameLead
 * @return {game.IAction}
 */
export function createGame(
  gameType?: string,
  gameName?: string,
  gameLead?: IUser,
): game.IAction {
  return {
    type: game.ActionTypes.CREATE_GAME,
    gameType,
    gameName,
    gameLead,
  }
}

/**
 * @param {string} gameType
 * @param {string} gameName
 * @param {IUser} gameLead
 * @return {game.IAction}
 */
export function onCreateGameSuccess(
  gameType?: string,
  gameName?: string,
  gameLead?: IUser,
): game.IAction {
  return {
    type: game.ActionTypes.ON_CREATE_GAME_SUCCESS,
    gameType,
    gameName,
    gameLead,
  }
}

/**
 * @param {string} username
 * @param {string} userId
 * @param {string} phrase
 * @return {game.IAction}
 */
export function addPhraseIntoGame(
  username: string,
  userId: string,
  phrase: string,
): game.IAction {
  return {
    type: game.ActionTypes.ADD_PHRASE_INTO_GAME,
    username,
    userId,
    phrase,
  }
}

/**
 * @param {number} phraseId
 * @return {game.IAction}
 */
export function deletePhraseOutGame(phraseId: number): game.IAction {
  return {
    type: game.ActionTypes.DELETE_PHRASE_OUT_GAME,
    phraseId,
  }
}
