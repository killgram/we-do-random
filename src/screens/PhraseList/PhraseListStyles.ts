import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  screenLoad: RNStyleType
  clearPhraseBox: RNStyleType
  listStyle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    screenLoad: {
      marginVertical: height(32),
    },
    clearPhraseBox: {
      marginTop: height(16),
    },
    listStyle: {
      marginBottom: height(30),
      marginTop: height(16),
    },
  })
}
