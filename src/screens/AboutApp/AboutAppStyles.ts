import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType, sp, width } from '@utils'

interface IStyles {
  loadingBox: RNStyleType
  name: RNStyleType
  sectionTop: RNStyleType
  sectionBottom: RNStyleType
  versionTitle: RNStyleType
  rowSection: RNStyleType
  ruffleImg: StyleProp<ImageStyle>
  ruffleImgBox: RNStyleType
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
      backgroundColor: getThemeColor('MAIN_CONTAINER_BACKGROUND'),
    },
    name: {
      textAlign: 'center',
      fontSize: sp(40),
      lineHeight: sp(40),
      marginTop: height(16),
    },
    sectionTop: {
      marginVertical: height(16),
    },
    sectionBottom: {
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
    ruffleImg: {
      width: height(250),
      height: height(250),
    },
    ruffleImgBox: {
      position: 'absolute',
      bottom: height(10),
      right: -width(32),
    },
  })
}
