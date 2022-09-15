import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
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
    container: {
      backgroundColor: getThemeColor('CREATE_GAME_CARD_BACKGROUND'),
      alignItems: 'center',
      justifyContent: 'center',
      padding: height(32),
      borderWidth: width(5),
      borderColor: getThemeColor('CREATE_GAME_CARD_BORDER'),
      borderRadius: radius(4),
    },
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
