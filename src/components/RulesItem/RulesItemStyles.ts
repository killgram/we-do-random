import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  header: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      marginVertical: height(16),
    },
    header: {
      textAlign: 'center',
      marginBottom: height(8),
    },
  })
}
