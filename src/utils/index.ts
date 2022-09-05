import {
  ImageStyleType,
  RNStyleType,
  ThemeType,
  IThemes,
  getThemeColor,
  getThemeGradient,
  IStatusBarThemes,
  getThemeStatusBar,
} from './Theme'

import {
  width,
  height,
  sp,
  radius,
  screenWidth,
  screenHeight,
} from './Responsive'

import { keyGenerate } from './KeyGenerate'

import { setLocale } from './i18n'

export {
  width,
  height,
  sp,
  radius,
  screenWidth,
  screenHeight,
  getThemeColor,
  getThemeGradient,
  keyGenerate,
  getThemeStatusBar,
  setLocale,
}

export type {
  RNStyleType,
  ImageStyleType,
  ThemeType,
  IThemes,
  IStatusBarThemes,
}
