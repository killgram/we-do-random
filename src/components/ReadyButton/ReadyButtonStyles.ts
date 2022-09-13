import { StyleSheet } from 'react-native'
import { getThemeColor, RNStyleType, width } from '@utils'

interface IStyles {
  container: RNStyleType
  ready: RNStyleType
  noReady: RNStyleType
  disabled: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: width(10),
      backgroundColor: getThemeColor('BACKGROUND_READY_BTN'),
    },
    ready: {
      borderWidth: width(1),
      borderColor: getThemeColor('READY'),
    },
    noReady: {
      borderWidth: width(1),
      borderColor: getThemeColor('NOT_READY'),
    },
    disabled: {
      opacity: 0.4,
    },
  })
}
