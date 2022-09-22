import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  winnerIcon: RNStyleType
  listStyle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    winnerIcon: {
      alignItems: 'center',
      marginTop: height(32),
    },
    listStyle: {
      marginBottom: height(30),
    },
  })
}
