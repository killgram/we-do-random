import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  listStyle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    listStyle: {
      marginBottom: height(30),
    },
  })
}
