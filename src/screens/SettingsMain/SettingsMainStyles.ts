import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  flagImage: StyleProp<ImageStyle>
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {},
    flagImage: {
      width: height(32),
      height: height(24),
    },
  })
}
