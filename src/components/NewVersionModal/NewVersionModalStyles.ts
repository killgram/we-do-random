import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  btn: RNStyleType
  title: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    title: {
      textAlign: 'center',
      marginBottom: height(20),
    },
    btn: {
      paddingHorizontal: width(32),
    },
  })
}
