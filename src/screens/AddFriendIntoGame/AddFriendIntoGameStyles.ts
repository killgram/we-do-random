import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  addFriendBox: RNStyleType
  listStyle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    addFriendBox: {
      marginVertical: height(16),
    },
    listStyle: {
      marginBottom: height(30),
    },
  })
}
