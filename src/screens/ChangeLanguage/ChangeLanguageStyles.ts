import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
  flagImage: StyleProp<ImageStyle>
  bodyContainer: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      paddingVertical: height(6),
    },
    flagImage: {
      width: height(32),
      height: height(24),
    },
    bodyContainer: {
      paddingLeft: width(16),
    },
  })
}
