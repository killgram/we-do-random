import { StyleSheet } from 'react-native'
import { Inputs } from '@ui-kit/styles'
import { RNStyleType, getThemeColor } from '@utils'

interface IStyles {
  input: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    input: {
      ...Inputs.input,
      color: getThemeColor('MAIN_TEXT'),
    },
  })
}
