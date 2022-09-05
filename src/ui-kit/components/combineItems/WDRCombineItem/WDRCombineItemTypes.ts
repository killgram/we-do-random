import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'

export interface IWDRCombineItemProps {
  style?: StyleProp<ViewStyle>
  styleBody?: StyleProp<ViewStyle>
  leftElement?: React.ReactNode
  bodyElement?: React.ReactNode
  rightElement?: React.ReactNode
  noPadding?: boolean
}
