import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  winnerIcon: RNStyleType
  winnerName: RNStyleType
  title: RNStyleType
  winnerChance: RNStyleType
  finishBtn: RNStyleType
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
      padding: height(16),
      backgroundColor: getThemeColor('FRIEND_LIST_ITEM_BACKGROUND'),
      marginTop: height(8),
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
      ...Fonts.number,
    },
    finishBtn: {
      marginTop: height(32),
    },
  })
}
