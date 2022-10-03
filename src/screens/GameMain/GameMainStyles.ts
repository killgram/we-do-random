import { ImageStyle, StyleProp, StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  gameBox: RNStyleType
  listBtnBox: RNStyleType
  link: RNStyleType
  ruffleImg: StyleProp<ImageStyle>
  ruffleImgBox: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    gameBox: {
      marginTop: height(20),
    },
    listBtnBox: {
      marginTop: height(24),
    },
    link: {
      textDecorationLine: 'underline',
    },
    ruffleImg: {
      width: height(250),
      height: height(250),
    },
    ruffleImgBox: {
      position: 'absolute',
      bottom: -height(20),
      right: -width(32),
    },
  })
}
