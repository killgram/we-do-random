import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType, sp, width } from '@utils'

interface IStyles {
  headerRight: RNStyleType
  gameNameTitle: RNStyleType
  playBtn: RNStyleType
  addPhraseBtn: RNStyleType
  leadStatusBox: RNStyleType
  hostTitleStatus: RNStyleType
  isReady: RNStyleType
  isReadyTitle: RNStyleType
  noReady: RNStyleType
  readyDisabled: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    headerRight: {
      marginRight: width(8),
    },
    gameNameTitle: {
      textAlign: 'center',
      paddingBottom: height(8),
    },
    playBtn: {
      marginBottom: height(30),
      marginTop: height(12),
    },
    addPhraseBtn: {
      marginBottom: height(8),
    },
    leadStatusBox: {
      flexDirection: 'row',
      marginBottom: height(30),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: height(8),
    },
    hostTitleStatus: {
      marginHorizontal: width(16),
    },
    isReady: {
      backgroundColor: getThemeColor('STATIC_BUTTONS'),
      borderRadius: radius(10),
      borderWidth: width(1),
      borderColor: getThemeColor('STATIC_BUTTONS'),
      marginTop: height(12),
    },
    isReadyTitle: {
      color: getThemeColor('SECONDARY_TEXT'),
      textAlign: 'center',
      fontSize: sp(18),
      paddingVertical: height(16),
      fontWeight: 'bold',
    },
    noReady: {
      backgroundColor: getThemeColor('NOT_READY'),
      borderRadius: radius(10),
      borderWidth: width(1),
      borderColor: getThemeColor('BORDER_COLOR'),
      marginTop: height(12),
    },
    readyDisabled: {
      opacity: 0.4,
    },
  })
}
