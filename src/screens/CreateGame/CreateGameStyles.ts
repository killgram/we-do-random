import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  flagImage: StyleProp<ImageStyle>
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    flagImage: {},
  })
}
