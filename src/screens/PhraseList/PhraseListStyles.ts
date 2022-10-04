import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  screenLoad: RNStyleType
  addBtn: RNStyleType
  clearAllBtnBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    screenLoad: {
      marginVertical: height(32),
    },
    addBtn: {
      marginBottom: height(30),
    },
    clearAllBtnBox: {
      textDecorationLine: 'underline',
    },
  })
}
