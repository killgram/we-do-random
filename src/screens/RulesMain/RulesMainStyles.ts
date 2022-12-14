import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp } from '@utils'

interface IStyles {
  rulesTitle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    rulesTitle: {
      fontSize: sp(40),
      lineHeight: sp(40),
      textAlign: 'center',
      marginTop: height(16),
    },
  })
}
