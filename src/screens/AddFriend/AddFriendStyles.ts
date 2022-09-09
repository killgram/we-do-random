import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  descTopContainer: RNStyleType
  input: RNStyleType
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
    input: {
      ...Fonts.number,
    },
    or: {
      textAlign: 'center',
      paddingVertical: height(16),
    },
  })
}
