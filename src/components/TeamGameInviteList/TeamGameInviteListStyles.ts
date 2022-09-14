import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
  text: RNStyleType
  leadBox: RNStyleType
  noAccepted: RNStyleType
  indicator: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      backgroundColor: getThemeColor('FRIEND_LIST_ITEM_BACKGROUND'),
      borderWidth: width(1),
      borderColor: getThemeColor('FRIEND_LIST_ITEM_BORDER'),
      borderRadius: radius(4),
      marginVertical: height(4),
    },
    text: {
      paddingHorizontal: width(8),
    },
    leadBox: {
      flexDirection: 'row',
      paddingLeft: width(8),
    },
    noAccepted: {
      flexDirection: 'row',
    },
    indicator: {
      paddingRight: width(8),
    },
  })
}
