import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      marginBottom: height(12),
      backgroundColor: getThemeColor('STATIC_BUTTONS'),
      paddingVertical: height(12),
      paddingHorizontal: width(10),
      borderRadius: radius(10),
    },
  })
}
