import { StyleSheet } from 'react-native'
import { RNStyleType } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  container: RNStyleType
  text: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {},
    text: {
      ...Fonts.bold,
    },
  })
}
