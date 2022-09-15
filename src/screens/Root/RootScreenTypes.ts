import { app, invite } from '@store/types'

interface IStateToProps {
  invite?: invite.IInitialState
}

interface IDispatchToProps {
  startup?: () => app.IAction
  declineInvite?: (leadId: string) => invite.IAction
}

export interface IState {
  invite?: invite.IInitialState
}

export type IRootScreenProps = IStateToProps & IDispatchToProps
