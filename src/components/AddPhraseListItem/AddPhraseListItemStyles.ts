import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  text: RNStyleType
  canChoose: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('FRIEND_LIST_ITEM_BACKGROUND'),
      borderRadius: radius(4),
      marginVertical: height(4),
    },
    text: {
      padding: height(8),
    },
    canChoose: {
      opacity: 0.4,
    },
  })
}
