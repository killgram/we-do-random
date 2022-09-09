import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  camera: RNStyleType
  cameraButton: RNStyleType
  cameraText: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    camera: {
      bottom: 0,
      justifyContent: 'flex-end',
      left: 0,
      paddingBottom: height(32),
      paddingHorizontal: width(10),
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 2,
    },
    cameraButton: {
      marginBottom: height(16),
      marginHorizontal: width(10),
    },
    cameraText: {
      paddingBottom: height(100),
      paddingHorizontal: width(20),
      textAlign: 'center',
    },
  })
}
