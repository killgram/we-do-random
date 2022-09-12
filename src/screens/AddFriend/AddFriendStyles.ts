import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  descTopContainer: RNStyleType
  or: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    descTopContainer: {
      marginTop: height(16),
    },
    or: {
      textAlign: 'center',
      paddingVertical: height(16),
    },
  })
}
