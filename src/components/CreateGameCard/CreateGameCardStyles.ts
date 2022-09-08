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
      backgroundColor: getThemeColor('CREATE_GAME_CARD_BACKGROUND'),
      alignItems: 'center',
      justifyContent: 'center',
      padding: height(32),
      borderWidth: width(5),
      borderColor: getThemeColor('CREATE_GAME_CARD_BORDER'),
      borderRadius: radius(4),
    },
  })
}
