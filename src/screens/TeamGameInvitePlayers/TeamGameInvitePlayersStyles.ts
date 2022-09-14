import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'
import { Fonts } from '@ui-kit/styles'

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
      ...Fonts.number,
      marginRight: width(8),
    },
    gameName: {
      textAlign: 'center',
      marginBottom: height(16),
    },
  })
}
