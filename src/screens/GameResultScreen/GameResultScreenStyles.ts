import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  winnerIcon: RNStyleType
  winnerName: RNStyleType
  title: RNStyleType
  winnerChance: RNStyleType
  finishBtn: RNStyleType
  winnerBox: RNStyleType
  chanceBox: RNStyleType
  viewPhraseBtn: RNStyleType
  viewPhraseBtnTitle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    winnerIcon: {
      alignItems: 'center',
      marginTop: height(32),
    },
    winnerName: {
      textAlign: 'center',
      color: getThemeColor('STATIC_BUTTONS'),
    },
    title: {
      textAlign: 'center',
      marginTop: height(16),
    },
    winnerChance: {
      textAlign: 'center',
      padding: height(16),
      backgroundColor: getThemeColor('FRIEND_LIST_ITEM_BACKGROUND'),
      marginTop: height(8),
    },
    finishBtn: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: height(30),
    },
    winnerBox: {
      paddingHorizontal: width(16),
      backgroundColor: getThemeColor('FRIEND_LIST_ITEM_BACKGROUND'),
      marginTop: height(8),
      borderRadius: radius(20),
      paddingVertical: height(32),
    },
    chanceBox: {
      flexDirection: 'row',
      marginTop: height(16),
      marginLeft: width(16),
    },
    viewPhraseBtn: {
      marginTop: height(16),
    },
    viewPhraseBtnTitle: {
      textDecorationLine: 'underline',
    },
  })
}
