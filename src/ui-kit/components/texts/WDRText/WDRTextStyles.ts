import { StyleSheet } from 'react-native'
import { Fonts } from '@ui-kit/styles'
import { sp } from '@utils'
import { getThemeColor, RNStyleType } from '@utils'

interface IStyles {
  font: RNStyleType
  heading: RNStyleType
  title: RNStyleType
  secondary: RNStyleType
  link: RNStyleType
  error: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    font: {
      ...Fonts.baseFontStyle,
      ...Fonts.regular,
      color: getThemeColor('MAIN_TEXT'),
    },
    heading: {
      ...Fonts.bold,
      fontSize: sp(32),
      lineHeight: sp(32),
    },
    title: {
      ...Fonts.bold,
    },
    secondary: {
      color: getThemeColor('SECONDARY_TEXT'),
      fontSize: sp(14),
    },
    link: {
      color: getThemeColor('LINK_TEXT'),
    },
    error: {
      color: getThemeColor('ERROR_TEXT'),
      fontSize: sp(12),
      lineHeight: sp(20),
    },
  })
}
