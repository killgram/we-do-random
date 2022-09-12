import { settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  route?: {
    params: {
      type: 'single' | 'team'
    }
  }
}

interface IDispatchToProps {}

export interface IState {
  settings?: settings.IInitialState
}

export type ICreateGameTypesProps = IStateToProps & IDispatchToProps
