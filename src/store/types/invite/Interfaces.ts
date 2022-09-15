import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isVisible?: boolean
  leaderName?: string
  leadId?: string
  gameName?: string
}

export interface ICleanInvite {
  type: ActionTypes.CLEAN_INVITE
}

export interface IIncomingInvite {
  type: ActionTypes.INCOMING_INVITE
  isVisible?: boolean
  leaderName?: string
  leadId?: string
  gameName?: string
}

export interface IDeclineInvite {
  type: ActionTypes.DECLINE_INVITE
  leadId?: string
}

export type IAction = IIncomingInvite | ICleanInvite | IDeclineInvite
