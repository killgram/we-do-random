import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppNavigatorPropsTypes } from '@navigators/NavigatorTypes'
import TemplateScreen from '@screens/TemplateScreen'
import BlankScreen from '@screens/BlankScreen'

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
          headerShown: true,
        }}
        initialRouteName="TemplateScreen"
      >
        <Stack.Screen name="TemplateScreen" component={TemplateScreen} />
        <Stack.Screen name="BlankScreen" component={BlankScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
