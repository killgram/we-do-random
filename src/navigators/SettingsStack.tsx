import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()
import ChangeLanguageScreen from '@screens/ChangeLanguage'
import AboutAppScreen from '@screens/AboutApp'
import SupportScreen from '@screens/Support'

/**
 * @description settings stack
 * @constructor
 */
const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultHeaderStyle,
        headerShown: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="ChangeLanguageScreen"
        component={ChangeLanguageScreen}
      />
      <Stack.Screen name="AboutAppScreen" component={AboutAppScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
    </Stack.Navigator>
  )
}
export default SettingsStack
