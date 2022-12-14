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
      backgroundColor: getThemeColor('QRCODE_BACKGROUND'),
      alignItems: 'center',
      justifyContent: 'center',
      padding: height(16),
      borderRadius: radius(16),
      marginHorizontal: width(22),
    },
  })
}
