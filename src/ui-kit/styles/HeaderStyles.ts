import { StackNavigationOptions } from '@react-navigation/stack'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

/**
 * @description Generic Navigation Properties Type
 */
type GeneralizedNavigationType = StackNavigationOptions &
  BottomTabNavigationOptions

const defaultHeaderStyle: GeneralizedNavigationType = {
  headerTransparent: true,
  headerBackTitleVisible: false,
  headerTitleAllowFontScaling: true,
}

export { defaultHeaderStyle }
