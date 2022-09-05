import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'

export interface ISEContainerProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  isKeyBoardDismiss?: boolean
  isTransparentHeader?: boolean
  paddingBottom?: number
  paddingHorizontal?: number
}
