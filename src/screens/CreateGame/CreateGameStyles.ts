import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  enterNameTitle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    enterNameTitle: {
      textAlign: 'center',
      marginBottom: height(8),
    },
  })
}
