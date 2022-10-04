import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  descTopContainer: RNStyleType
  listStyle: RNStyleType
  screenLoad: RNStyleType
  inputBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    descTopContainer: {
      marginTop: height(16),
    },
    listStyle: {
      marginBottom: height(30),
      marginTop: height(16),
    },
    screenLoad: {
      marginVertical: height(32),
    },
    inputBox: {
      backgroundColor: getThemeColor('PLACEHOLDER_INPUT'),
    },
  })
}
