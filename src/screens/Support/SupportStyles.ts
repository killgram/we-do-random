import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  loadingBox: RNStyleType
  writeMeTitle: RNStyleType
  email: RNStyleType
  helpDataBox: RNStyleType
  helpDataTitle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    loadingBox: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: height(24),
    },
    writeMeTitle: {
      marginTop: height(8),
      textAlign: 'center',
    },
    email: {
      marginTop: height(12),
      marginBottom: height(22),
      backgroundColor: getThemeColor('STATIC_BUTTONS'),
      paddingVertical: height(12),
      paddingHorizontal: width(10),
      borderRadius: radius(10),
    },
    helpDataBox: {
      marginVertical: height(16),
    },
    helpDataTitle: {
      marginBottom: height(16),
      textAlign: 'center',
    },
  })
}
