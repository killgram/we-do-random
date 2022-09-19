import { StyleSheet } from 'react-native'
import { height, radius, RNStyleType, width } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  headerRight: RNStyleType
  gameNameTitle: RNStyleType
  playBtn: RNStyleType
  addPhraseBtn: RNStyleType
  listStyle: RNStyleType
  leadStatusBox: RNStyleType
  hostTitleStatus: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    headerRight: {
      ...Fonts.number,
      marginRight: width(8),
    },
    gameNameTitle: {
      textAlign: 'center',
      paddingBottom: height(8),
    },
    playBtn: {
      borderRadius: radius(4),
      marginRight: width(16),
    },
    addPhraseBtn: {
      marginHorizontal: width(24),
      marginVertical: height(16),
    },
    listStyle: {
      marginBottom: height(30),
    },
    leadStatusBox: {
      flexDirection: 'row',
      marginVertical: height(8),
      alignItems: 'center',
      justifyContent: 'center',
    },
    hostTitleStatus: {
      marginHorizontal: width(16),
    },
  })
}
