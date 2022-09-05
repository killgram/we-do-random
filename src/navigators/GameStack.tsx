import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()

import BlankScreen from '@screens/BlankScreen'

/**
 * @description game stack
 * @constructor
 */
const GameStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BlankScreen"
      screenOptions={{
        ...defaultHeaderStyle,
        headerShown: true,
      }}
    >
      <Stack.Screen name="BlankScreen" component={BlankScreen} />
    </Stack.Navigator>
  )
}
export default GameStack
