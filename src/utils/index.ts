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
import { chunkSubstr } from './ChunkSubstr'
import { onSuccessCopyToast } from './Toast'
import { copyToClipboard } from './Clipboard'
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
  chunkSubstr,
  onSuccessCopyToast,
  copyToClipboard,
}

export type {
  RNStyleType,
  ImageStyleType,
  ThemeType,
  IThemes,
  IStatusBarThemes,
}
