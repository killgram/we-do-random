import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  winner: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      marginVertical: height(4),
    },
    winner: {
      color: getThemeColor('CHOSEN_ICON'),
    },
  })
}
