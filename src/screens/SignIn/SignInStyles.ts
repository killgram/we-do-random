import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  sectionTop: RNStyleType
  sectionBottom: RNStyleType
  titleTop: RNStyleType
  langListContainer: RNStyleType
  titleBottom: RNStyleType
  enterBtn: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    sectionTop: {
      marginVertical: height(90),
      justifyContent: 'center',
    },
    titleTop: {
      alignSelf: 'center',
      marginBottom: height(32),
    },
    langListContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    sectionBottom: {
      flex: 0.9,
    },
    titleBottom: {
      alignSelf: 'center',
      marginBottom: height(32),
    },
    enterBtn: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  })
}
