import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { PressableProps } from 'react-native'

export interface IWDRButtonProps extends PressableProps {
  title: string
  titleStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  isDisabled?: boolean
  isSecondary?: boolean
  isLoading?: boolean
  loaderStyle?: StyleProp<ViewStyle>
  isTransparent?: boolean
}
