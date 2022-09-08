import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  gameBox: RNStyleType
  listBtnBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    gameBox: {
      marginBottom: height(16),
    },
    listBtnBox: {
      marginTop: height(48),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })
}
