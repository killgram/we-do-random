import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  modalText: RNStyleType
  btnBox: RNStyleType
  choseBtnAccept: RNStyleType
  choseBtnDecline: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    modalText: {
      marginVertical: height(8),
    },
    btnBox: {
      flexDirection: 'row',
      marginTop: height(16),
    },
    choseBtnAccept: {
      paddingHorizontal: width(16),
      marginHorizontal: width(8),
      backgroundColor: getThemeColor('ACCEPT_BUTTON'),
      paddingVertical: height(8),
      borderRadius: radius(32),
    },
    choseBtnDecline: {
      paddingHorizontal: width(16),
      marginHorizontal: width(8),
      backgroundColor: getThemeColor('DECLINE_BUTTON'),
      paddingVertical: height(8),
      borderRadius: radius(32),
    },
  })
}
