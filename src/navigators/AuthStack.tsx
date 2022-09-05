import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()

import SignInScreen from '@screens/SignIn'

/**
 * @description authorization stack
 * @constructor
 */
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        ...defaultHeaderStyle,
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  )
}
export default AuthStack
