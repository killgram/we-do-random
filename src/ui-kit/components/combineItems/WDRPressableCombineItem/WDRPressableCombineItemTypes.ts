import { StyleProp, ViewStyle } from 'react-native'
import { IWDRCombineItemProps } from '../WDRCombineItem/WDRCombineItemTypes'

export interface IWDRPressableCombineItemProps extends IWDRCombineItemProps {
  onPress<T>(arg: T): void
  styleContainer?: StyleProp<ViewStyle>
  disabled?: boolean
}
