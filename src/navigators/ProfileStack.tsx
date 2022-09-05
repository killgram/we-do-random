import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()
import BlankScreen from '@screens/BlankScreen'

/**
 * @description profile stack
 * @constructor
 */
const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BlankScreen"
      screenOptions={{
        ...defaultHeaderStyle,
        headerShown: false,
      }}
    >
      <Stack.Screen name="BlankScreen" component={BlankScreen} />
    </Stack.Navigator>
  )
}
export default ProfileStack
