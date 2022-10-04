import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, sp } from '@utils'

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
      marginTop: height(20),
      backgroundColor: getThemeColor('STATIC_BUTTONS'),
      borderRadius: radius(10),
    },
  })
}
