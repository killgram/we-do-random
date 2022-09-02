import { StyleSheet } from 'react-native'
import { RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: 'red',
    },
  })
}
