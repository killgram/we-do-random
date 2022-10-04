import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  descTopContainer: RNStyleType
  inputBox: RNStyleType
  friendListBtn: RNStyleType
  addBtnBox: RNStyleType
  qrAddBtn: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    descTopContainer: {
      marginTop: height(16),
    },
    inputBox: {
      backgroundColor: getThemeColor('PLACEHOLDER_INPUT'),
    },
    friendListBtn: {
      textDecorationLine: 'underline',
    },
    addBtnBox: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: height(30),
    },
    qrAddBtn: {
      marginTop: height(16),
    },
  })
}
