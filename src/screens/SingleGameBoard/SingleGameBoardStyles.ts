import { StyleSheet } from 'react-native'
import { height, radius, RNStyleType, width } from '@utils'

interface IStyles {
  listStyle: RNStyleType
  gameNameTitle: RNStyleType
  playBtn: RNStyleType
  addPhraseBtn: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    listStyle: {
      marginBottom: height(30),
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
  })
}
