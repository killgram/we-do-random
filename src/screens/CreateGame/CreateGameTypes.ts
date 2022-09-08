import { settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  language?: string
  navigation?: NavigationType
  route?: {
    params: {
      type: 'single' | 'team'
    }
  }
}

interface IDispatchToProps {
  logout?: () => void
}

export interface IState {
  settings?: settings.IInitialState
}

export type ICreateGameTypesProps = IStateToProps & IDispatchToProps
