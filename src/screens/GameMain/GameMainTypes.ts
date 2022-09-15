import { profile, invite } from '@store/types'

interface IStateToProps {
  userId?: string
}

export interface IState {
  profile?: profile.IInitialState
}

interface IDispatchToProps {
  incomingInvite?: (
    leaderName: string,
    leadId: string,
    gameName: string,
  ) => invite.IAction
}

export type IGameMainScreenTypesProps = IDispatchToProps & IStateToProps
