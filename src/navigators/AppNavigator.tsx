import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppNavigatorPropsTypes } from '@navigators/NavigatorTypes'

import AuthStack from '@navigators/AuthStack'
import BottomTabStack from '@navigators/BottomTabStack'
import GameStack from '@navigators/GameStack'
import RulesStack from '@navigators/RulesStack'
import ProfileStack from '@navigators/ProfileStack'
import SettingsStack from '@navigators/SettingsStack'

const Stack = createStackNavigator()

/**
 * @description - The basic navigation "wrapper" of the application
 * @param {object} props
 * @param {function} props.forwardRef
 * @param {function} props.onReady
 * @constructor
 */
const AppNavigator = (props: AppNavigatorPropsTypes) => {
  const { forwardRef, onReady } = props

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        navigatorRef != null && forwardRef(navigatorRef)
      }}
      onReady={onReady}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthStack"
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
        <Stack.Screen name="GameStack" component={GameStack} />
        <Stack.Screen name="RulesStack" component={RulesStack} />
        <Stack.Screen name="ProfileStack" component={ProfileStack} />
        <Stack.Screen name="SettingsStack" component={SettingsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
