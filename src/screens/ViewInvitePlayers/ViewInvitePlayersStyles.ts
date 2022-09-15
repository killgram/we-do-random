import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  listStyle: RNStyleType
  headerRight: RNStyleType
  gameName: RNStyleType
  waiting: RNStyleType
  waitText: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    listStyle: {
      marginBottom: height(30),
    },
    headerRight: {
      ...Fonts.number,
      marginRight: width(8),
    },
    gameName: {
      textAlign: 'center',
      marginBottom: height(8),
    },
    waiting: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: height(8),
    },
    waitText: {
      paddingRight: width(8),
    },
  })
}
