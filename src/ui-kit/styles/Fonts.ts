import { Constants } from '@configurations'
import { sp } from '@utils'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseFontStyle: {
    lineHeight: sp(24),
    fontSize: sp(18),
  },
  regular: {
    fontFamily: Constants.APP_FONT_FAMILY.Raleway_Regular,
  },
  bold: {
    fontFamily: Constants.APP_FONT_FAMILY.Raleway_Bold,
  },
  light: {
    fontFamily: Constants.APP_FONT_FAMILY.Raleway_Light,
  },
  medium: {
    fontFamily: Constants.APP_FONT_FAMILY.Raleway_Medium,
  },
  // light: {
  //     fontFamily: Constants.APP_FONT_FAMILY.PTRootUI_Light,
  // },
  // medium: {
  //     fontFamily: Constants.APP_FONT_FAMILY.PTRootUI_Medium,
  // },
  // headerTitleDefault: {
  //     fontSize: sp(24),
  //     lineHeight: sp(32),
  //     fontFamily: Constants.APP_FONT_FAMILY.PTRootUI_Bold,
  //     fontWeight: 'bold', // для header - required
  // },
  bottomTabFontStyle: {
    fontSize: sp(11),
    lineHeight: sp(15),
  },
})
