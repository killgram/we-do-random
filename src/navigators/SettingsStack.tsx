import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()
import ChangeLanguageScreen from '@screens/ChangeLanguage'

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
      }}
    >
      <Stack.Screen
        name="ChangeLanguageScreen"
        component={ChangeLanguageScreen}
      />
    </Stack.Navigator>
  )
}
export default SettingsStack
