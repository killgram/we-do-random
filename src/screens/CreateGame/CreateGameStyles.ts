import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  enterNameTitle: RNStyleType
  inputBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    enterNameTitle: {
      marginVertical: height(16),
    },
    inputBox: {
      backgroundColor: getThemeColor('PLACEHOLDER_INPUT'),
    },
  })
}
