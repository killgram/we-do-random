import { invite } from '@store/types'

/**
 * @return {invite.IAction}
 */
export function cleanInvite(): invite.IAction {
  return {
    type: invite.ActionTypes.CLEAN_INVITE,
  }
}

/**
 * @param {string} leaderName
 * @param {string} leadId
 * @param {string} gameName
 * @return {invite.IAction}
 */
export function incomingInvite(
  leaderName: string,
  leadId: string,
  gameName: string,
): invite.IAction {
  return {
    type: invite.ActionTypes.INCOMING_INVITE,
    leaderName,
    leadId,
    gameName,
  }
}

/**
 * @param {string} leadId
 * @return {invite.IAction}
 */
export function declineInvite(leadId: string): invite.IAction {
  return {
    type: invite.ActionTypes.DECLINE_INVITE,
    leadId,
  }
}
