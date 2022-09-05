import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '@ui-kit/styles'
import { RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      ...ApplicationStyles.container,
    },
  })
}
