import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  usernameText: RNStyleType
  userIdNumbers: RNStyleType
  userIdTitle: RNStyleType
  copyBtn: RNStyleType
  copyBtnContainer: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    usernameText: {
      lineHeight: sp(40),
      fontSize: sp(40),
      textAlign: 'center',
      paddingVertical: height(20),
    },
    userIdNumbers: {
      ...Fonts.number,
      textAlign: 'center',
      lineHeight: sp(30),
      fontSize: sp(24),
    },
    userIdTitle: {
      textAlign: 'center',
      paddingVertical: height(20),
    },
    copyBtn: {
      padding: height(10),
    },
    copyBtnContainer: {
      // backgroundColor: 'red',
    },
  })
}
