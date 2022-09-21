import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  listStyle: RNStyleType
  beginBtn: RNStyleType
  headerRight: RNStyleType
  gameName: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    listStyle: {
      marginBottom: height(30),
    },
    beginBtn: {
      marginVertical: height(12),
    },
    headerRight: {
      marginRight: width(8),
    },
    gameName: {
      textAlign: 'center',
      marginBottom: height(16),
    },
  })
}
