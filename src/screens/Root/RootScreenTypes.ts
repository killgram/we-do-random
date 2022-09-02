import { app } from '@store/types'

interface IStateToProps {}

interface IDispatchToProps {
  startup?: () => app.IAction
}

export interface IState {}

export type IRootScreenProps = IStateToProps & IDispatchToProps
