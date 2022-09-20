import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  loadingBox: RNStyleType
  writeMeTitle: RNStyleType
  email: RNStyleType
  cryptoBox: RNStyleType
  cryptoTitle: RNStyleType
  distributionTitle: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    loadingBox: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    writeMeTitle: {
      marginTop: height(8),
      textAlign: 'center',
    },
    email: {
      marginTop: height(12),
      marginBottom: height(22),
    },
    cryptoBox: {
      marginVertical: height(16),
    },
    cryptoTitle: {
      marginBottom: height(8),
      textAlign: 'center',
    },
    distributionTitle: {
      textAlign: 'center',
      borderWidth: width(1),
    },
  })
}
