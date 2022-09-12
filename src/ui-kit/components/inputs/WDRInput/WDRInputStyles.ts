import { StyleSheet } from 'react-native'
import { Inputs, Fonts } from '@ui-kit/styles'
import { RNStyleType, getThemeColor, height } from '@utils'

interface IStyles {
  container: RNStyleType
  containerFocus: RNStyleType
  containerError: RNStyleType
  textBold: RNStyleType
  textRegular: RNStyleType
  textError: RNStyleType
  textDisabled: RNStyleType
  label: RNStyleType
  error: RNStyleType
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
      ...Fonts.number,
    },
    textError: {
      color: getThemeColor('ERROR_INPUT'),
    },
    textDisabled: {
      color: getThemeColor('DISABLE_INPUT'),
    },
    label: {
      marginBottom: height(8),
    },
    error: {
      marginTop: height(8),
    },
  })
}
