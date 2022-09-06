import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  flagImage: StyleProp<ImageStyle>
  activeContainer: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: height(4),
    },
    flagImage: {
      width: height(32),
      height: height(24),
      marginBottom: height(8),
    },
    activeContainer: {
      color: getThemeColor('CHOSEN_TEXT'),
    },
  })
}
