import { ViewStyle, TextStyle, ImageStyle, StyleProp } from 'react-native'

export interface IThemes {
  [key: string]: any
}

export type ThemeType = 'light' | 'dark' | undefined

export type RNStyleType = StyleProp<ViewStyle | TextStyle | ImageStyle>
export type ImageStyleType = StyleProp<ImageStyle>
