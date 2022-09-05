import { StackNavigationOptions } from '@react-navigation/stack'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { getThemeColor } from '@utils'

/**
 * @description Generic Navigation Properties Type
 */
type GeneralizedNavigationType = StackNavigationOptions &
  BottomTabNavigationOptions

const defaultHeaderStyle: GeneralizedNavigationType = {
  headerTransparent: true,
  headerBackTitleVisible: false,
  headerTitleAllowFontScaling: true,
  headerTintColor: getThemeColor('MAIN_TEXT'),
}

export { defaultHeaderStyle }
