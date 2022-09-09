import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  })
}
