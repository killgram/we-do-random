import { StyleSheet } from 'react-native'
import { Inputs, Fonts } from '@ui-kit/styles'
import { RNStyleType, getThemeColor } from '@utils'

interface IStyles {
  container: RNStyleType
  containerFocus: RNStyleType
  containerError: RNStyleType
  textBold: RNStyleType
  textRegular: RNStyleType
  textError: RNStyleType
  textDisabled: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      ...Inputs.inputContainer,
      borderColor: getThemeColor('TRANSPARENT_INPUT'),
      backgroundColor: getThemeColor('BACKGROUND_INPUT'),
    },
    containerFocus: {
      borderColor: getThemeColor('BORDER_INPUT'),
    },
    containerError: {
      borderColor: getThemeColor('ERROR_INPUT'),
    },
    textBold: {
      ...Fonts.bold,
    },
    textRegular: {
      ...Fonts.regular,
    },
    textError: {
      color: getThemeColor('ERROR_INPUT'),
    },
    textDisabled: {
      color: getThemeColor('DISABLE_INPUT'),
    },
  })
}
