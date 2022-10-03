import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  descTopContainer: RNStyleType
  link: RNStyleType
  addBtnBox: RNStyleType
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
    link: {
      textDecorationLine: 'underline',
    },
    addBtnBox: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: height(30),
    },
    inputBox: {
      backgroundColor: getThemeColor('PLACEHOLDER_INPUT'),
    },
  })
}
