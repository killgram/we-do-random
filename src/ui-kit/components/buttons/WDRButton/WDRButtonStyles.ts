import { StyleSheet } from 'react-native'
import { Buttons } from '@ui-kit/styles'
import { getThemeColor, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  staticSecondary: RNStyleType
  pressedSecondary: RNStyleType
  static: RNStyleType
  pressed: RNStyleType
  opacity: RNStyleType
  loader: RNStyleType
  titleContainer: RNStyleType
  transparent: RNStyleType
  textSecondary: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      ...Buttons.baseButtonStyle,
    },
    staticSecondary: {
      backgroundColor: getThemeColor('STATIC_SECONDARY_BUTTONS'),
    },
    pressedSecondary: {
      backgroundColor: getThemeColor('PRESSED_SECONDARY_BUTTONS'),
    },
    static: {
      backgroundColor: getThemeColor('STATIC_BUTTONS'),
    },
    pressed: {
      backgroundColor: getThemeColor('PRESSED_BUTTONS'),
    },
    opacity: {
      opacity: 0.4,
    },
    loader: {
      backgroundColor: getThemeColor('BUTTONS_LOADER'),
    },
    titleContainer: {
      flex: 1,
    },
    transparent: {
      backgroundColor: getThemeColor('TRANSPARENT_BUTTONS'),
    },
    textSecondary: {
      color: getThemeColor('LIGHT_TEXT'),
    },
  })
}
