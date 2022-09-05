import { IWDRModalTypes } from '../WDRModal/WDRModalTypes'
import { StyleProp, ViewStyle } from 'react-native'

export interface IWDRCenterModalTypes extends IWDRModalTypes {
  modalStyles?: StyleProp<ViewStyle>
}
