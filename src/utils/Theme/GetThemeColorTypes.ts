import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleProp,
  StatusBarStyle,
} from 'react-native'

export interface IThemes {
  [key: string]: any
}

export interface IStatusBarThemes {
  [key: string]: StatusBarStyle
}

export type ThemeType = 'light' | 'dark' | undefined

export type RNStyleType = StyleProp<ViewStyle | TextStyle | ImageStyle>
export type ImageStyleType = StyleProp<ImageStyle>
