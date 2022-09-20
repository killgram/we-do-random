import { app, invite } from '@store/types'

interface IStateToProps {
  invite?: invite.IInitialState
  updateModal?: boolean
}

interface IDispatchToProps {
  startup?: () => app.IAction
  declineInvite?: (leadId: string) => invite.IAction
  acceptInvite?: (leadId: string) => invite.IAction
  cleanNewAppVersion?: () => app.IAction
}

export interface IState {
  invite?: invite.IInitialState
  app?: app.IInitialState
}

export type IRootScreenProps = IStateToProps & IDispatchToProps
