import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  text: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      height: height(50),
      width: '100%',
      backgroundColor: getThemeColor('SUCCESS_BACKGROUND_TOAST'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
    },
  })
}
