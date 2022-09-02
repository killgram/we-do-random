import {
  NavigationContainerRef,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native'

export type NavigatorRefType = NavigationContainerRef<Object>

export type NavigationType = NavigationProp<ParamListBase>

export type AppNavigatorPropsTypes = {
  forwardRef: Function
  onReady: () => void
}

export interface INavigateParams {
  [key: string]: any
  screen?: string
  initial?: boolean
  params?: IUniversalParams
}

interface IUniversalParams {
  [key: string]: any
}
