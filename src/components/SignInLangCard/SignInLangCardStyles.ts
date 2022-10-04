import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { height, RNStyleType, sp } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  container: RNStyleType
  flagImage: StyleProp<ImageStyle>
  activeContainer: RNStyleType
  activeFlagImage: StyleProp<ImageStyle>
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
      opacity: 0.4,
    },
    activeContainer: {
      ...Fonts.bold,
      fontSize: sp(18),
    },
    activeFlagImage: {
      width: height(38),
      height: height(30),
      opacity: 1,
    },
  })
}
