import { profile } from '@store/types'

interface IStateToProps {
  userId?: string
}

export interface IState {
  profile?: profile.IInitialState
}

interface IDispatchToProps {}

export type IGameMainScreenTypesProps = IDispatchToProps & IStateToProps
