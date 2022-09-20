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
import { onSuccessCopyToast, errorToast, successToast } from './Toast'
import { copyToClipboard, getDataToBuffer } from './Clipboard'
import { addPhrase, deletePhrase, clearPhrase, getPhraseData } from './Realm'
import { calcWinner, calcChance } from './CalcWinner'
import { openLink } from './OpenLink'

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
  errorToast,
  successToast,
  getDataToBuffer,
  addPhrase,
  deletePhrase,
  clearPhrase,
  getPhraseData,
  calcWinner,
  calcChance,
  openLink,
}

export type {
  RNStyleType,
  ImageStyleType,
  ThemeType,
  IThemes,
  IStatusBarThemes,
}
