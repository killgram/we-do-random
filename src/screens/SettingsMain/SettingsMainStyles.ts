import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  flagImage: StyleProp<ImageStyle>
  combineContainer: RNStyleType
  logoutBtn: RNStyleType
  modalText: RNStyleType
  modalLogoutBtn: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    flagImage: {
      width: height(32),
      height: height(24),
    },
    combineContainer: {
      paddingVertical: height(6),
    },
    logoutBtn: {
      marginBottom: height(32),
      flex: 1,
      justifyContent: 'flex-end',
    },
    modalText: {
      textAlign: 'center',
      paddingVertical: height(16),
    },
    modalLogoutBtn: {
      paddingHorizontal: width(32),
    },
  })
}
