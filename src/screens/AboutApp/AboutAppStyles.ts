import { StyleSheet } from 'react-native'
import { height, RNStyleType, sp, width } from '@utils'

interface IStyles {
  loadingBox: RNStyleType
  name: RNStyleType
  sectionTop: RNStyleType
  sectionBottom: RNStyleType
  versionTitle: RNStyleType
  rowSection: RNStyleType
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
    name: {
      textAlign: 'center',
      fontSize: sp(40),
      lineHeight: sp(40),
      marginTop: height(16),
    },
    sectionTop: {
      flex: 0.5,
      marginTop: height(16),
    },
    sectionBottom: {
      flex: 0.45,
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
    versionTitle: {
      marginHorizontal: width(8),
      fontSize: sp(20),
    },
    rowSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: height(24),
    },
  })
}
