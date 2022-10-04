import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, sp } from '@utils'

interface IStyles {
  listStyle: RNStyleType
  gameNameTitle: RNStyleType
  playBtn: RNStyleType
  addPhraseBtn: RNStyleType
  isReady: RNStyleType
  isReadyTitle: RNStyleType
  noReady: RNStyleType
  isNoReadyTitle: RNStyleType
  readyDisabled: RNStyleType
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
      borderRadius: radius(10),
    },
    isReadyTitle: {
      color: getThemeColor('STATIC_BUTTONS'),
      textAlign: 'center',
      fontSize: sp(18),
      paddingVertical: height(16),
      fontWeight: 'bold',
    },
    noReady: {
      backgroundColor: getThemeColor('NOT_READY'),
      borderRadius: radius(10),
    },
    isNoReadyTitle: {
      color: getThemeColor('SECONDARY_TEXT'),
      textAlign: 'center',
      fontSize: sp(18),
      paddingVertical: height(16),
      fontWeight: 'bold',
    },
    readyDisabled: {
      opacity: 0.4,
    },
  })
}
