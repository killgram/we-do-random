import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  descTopContainer: RNStyleType
  listStyle: RNStyleType
  screenLoad: RNStyleType
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
  })
}
