import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType, sp } from '@utils'

interface IStyles {
  sectionTop: RNStyleType
  titleTop: RNStyleType
  langListContainer: RNStyleType
  titleBottom: RNStyleType
  ruffleImg: StyleProp<ImageStyle>
  container: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    sectionTop: {
      marginVertical: height(50),
      justifyContent: 'center',
    },
    titleTop: {
      alignSelf: 'center',
      marginBottom: height(48),
      fontSize: sp(32),
      lineHeight: sp(38),
    },
    langListContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    titleBottom: {
      marginBottom: height(12),
      marginTop: height(32),
    },
    ruffleImg: {
      width: height(160),
      height: height(160),
      alignSelf: 'center',
      marginTop: height(100),
    },
    container: {
      backgroundColor: getThemeColor('BACKGROUND'),
    },
  })
}
