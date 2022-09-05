import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface IWDRModalTypes {
  children?: React.ReactNode
  isVisible: boolean
  animationType?: 'fade' | 'none' | 'slide'
  closeHandler?(): void
  containerStyles?: StyleProp<ViewStyle>
  isDisabledClose?: boolean
  enabledKeyboardShift?: boolean
}
