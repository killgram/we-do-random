import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
  text: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('CREATE_GAME_CARD_BACKGROUND'),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: width(3),
      borderColor: getThemeColor('CREATE_GAME_CARD_BORDER'),
      flex: 0.45,
      borderRadius: radius(4),
      padding: height(32),
    },
    text: {
      textAlign: 'center',
      padding: height(16),
    },
  })
}
