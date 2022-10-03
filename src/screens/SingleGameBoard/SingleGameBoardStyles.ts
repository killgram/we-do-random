import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  listStyle: RNStyleType
  gameNameTitle: RNStyleType
  playBtn: RNStyleType
  addPhraseBtn: RNStyleType
  isReady: RNStyleType
  isReadyTitle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    listStyle: {
      marginTop: height(16),
    },
    gameNameTitle: {
      textAlign: 'center',
      paddingBottom: height(8),
    },
    playBtn: {
      marginBottom: height(16),
    },
    addPhraseBtn: {
      marginBottom: height(30),
    },
    isReady: {
      backgroundColor: getThemeColor('READY'),
    },
    isReadyTitle: {
      color: getThemeColor('MAIN_TEXT'),
    },
  })
}
