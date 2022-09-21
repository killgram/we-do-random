import { Constants } from '@configurations'
import { sp } from '@utils'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseFontStyle: {
    lineHeight: sp(24),
    fontSize: sp(18),
  },
  regular: {
    fontFamily: Constants.APP_FONT_FAMILY.NotoSansJP_Regular,
  },
  bold: {
    fontFamily: Constants.APP_FONT_FAMILY.NotoSansJP_Bold,
  },
  light: {
    fontFamily: Constants.APP_FONT_FAMILY.NotoSansJP_Light,
  },
  medium: {
    fontFamily: Constants.APP_FONT_FAMILY.NotoSansJP_Medium,
  },
})
