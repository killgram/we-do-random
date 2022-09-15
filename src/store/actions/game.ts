import { game } from '@store/types'
import { IPlayers, IUser } from '@store/types/game/Interfaces'

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

/**
 * @return {game.IAction}
 */
export function startFinishGame(): game.IAction {
  return {
    type: game.ActionTypes.START_FINISH_GAME,
  }
}

/**
 * @param {number} username
 * @param {number} phrase
 * @param {number} chance
 * @return {game.IAction}
 */
export function gameFinishSuccess(
  username: string,
  phrase: string,
  chance: string,
): game.IAction {
  return {
    type: game.ActionTypes.GAME_FINISH_SUCCESS,
    username,
    phrase,
    chance,
  }
}

/**
 * @param {number} leadUserId
 * @param {number} userId
 * @return {game.IAction}
 */
export function addPlayer(leadUserId: string, userId: string): game.IAction {
  return {
    type: game.ActionTypes.ADD_PLAYER,
    leadUserId,
    userId,
  }
}

/**
 * @param {number} leadUserId
 * @param {number} username
 * @param {number} userId
 * @param {boolean} isOnline
 * @param {boolean} isAccepted
 * @return {game.IAction}
 */
export function addPlayerSuccess(
  leadUserId: string,
  username: string,
  userId: string,
  isOnline: boolean,
  isAccepted: boolean,
): game.IAction {
  return {
    type: game.ActionTypes.ADD_PLAYER_SUCCESS,
    leadUserId,
    username,
    userId,
    isOnline,
    isAccepted,
  }
}

/**
 * @param {number} leadUserId
 * @param {number} userId
 * @return {game.IAction}
 */
export function kickOffPlayer(
  leadUserId: string,
  userId: string,
): game.IAction {
  return {
    type: game.ActionTypes.KICKOFF_PLAYER,
    leadUserId,
    userId,
  }
}

/**
 * @param {number} leadUserId
 * @param {number} userId
 * @return {game.IAction}
 */
export function kickOffPlayerSuccess(
  leadUserId: string,
  userId: string,
): game.IAction {
  return {
    type: game.ActionTypes.KICKOFF_PLAYER_SUCCESS,
    leadUserId,
    userId,
  }
}

/**
 * @param {string} userId
 * @param {boolean} isAccepted
 * @return {game.IAction}
 */
export function updateAcceptedStatus(
  userId: string,
  isAccepted: boolean,
): game.IAction {
  return {
    type: game.ActionTypes.UPDATE_ACCEPTED_STATUS,
    userId,
    isAccepted,
  }
}

/**
 * @param {Array<IPlayers>} playersList
 * @return {game.IAction}
 */
export function updateInviteStatus(playersList: Array<IPlayers>): game.IAction {
  return {
    type: game.ActionTypes.UPDATE_INVITE_STATUS,
    playersList,
  }
}

/**
 * @param {game.IInitialState} data
 * @return {game.IAction}
 */
export function updateGameView(data: game.IInitialState): game.IAction {
  return {
    type: game.ActionTypes.UPDATE_GAME_VIEW,
    data,
  }
}

/**
 * @param {game.IInitialState} data
 * @return {game.IAction}
 */
export function updateGameViewSuccess(data: game.IInitialState): game.IAction {
  return {
    type: game.ActionTypes.UPDATE_GAME_VIEW_SUCCESS,
    data,
  }
}
