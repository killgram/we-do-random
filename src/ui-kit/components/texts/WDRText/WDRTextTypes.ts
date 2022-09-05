import { TextProps, ColorValue, StyleProp, TextStyle } from 'react-native'
import React from 'react'

export interface IWDRTextProps extends TextProps {
  children: React.ReactNode
  isTitle?: boolean
  isHeading?: boolean
  isSecondary?: boolean
  isError?: boolean
  isLink?: boolean
  style?: StyleProp<TextStyle>
  size?: number
  color?: ColorValue
  other?: TextProps
}
