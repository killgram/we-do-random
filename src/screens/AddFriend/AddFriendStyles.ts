import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  descTopContainer: RNStyleType
  link: RNStyleType
  addBtnBox: RNStyleType
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
  })
}
