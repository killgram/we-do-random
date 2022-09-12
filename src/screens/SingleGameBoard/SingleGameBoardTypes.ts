import { settings } from '@store/types'
import { NavigationType } from '@navigators'

interface IStateToProps {
  navigation?: NavigationType
  route?: {
    params: {
      gameName: string
    }
  }
}

interface IDispatchToProps {}

export interface IState {
  settings?: settings.IInitialState
}

export type ISingleGameBoardScreenProps = IStateToProps & IDispatchToProps
