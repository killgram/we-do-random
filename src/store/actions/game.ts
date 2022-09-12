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
