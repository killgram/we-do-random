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
import { getUserId } from './GetUserId'
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
  getUserId,
}

export type {
  RNStyleType,
  ImageStyleType,
  ThemeType,
  IThemes,
  IStatusBarThemes,
}
