import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'
import { Fonts } from '@ui-kit/styles'

interface IStyles {
  loadingBox: RNStyleType
  writeMeTitle: RNStyleType
  email: RNStyleType
  helpDataBox: RNStyleType
  helpDataTitle: RNStyleType
  distributionTitle: RNStyleType
  emailTitle: RNStyleType
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
    helpDataBox: {
      marginVertical: height(16),
    },
    helpDataTitle: {
      marginBottom: height(8),
      textAlign: 'center',
    },
    distributionTitle: {
      textAlign: 'center',
      borderWidth: width(1),
    },
    emailTitle: {
      ...Fonts.number,
    },
  })
}
