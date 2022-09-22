import React from 'react'
import { DarkTheme, NavigationContainer, Theme } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { AppNavigatorPropsTypes } from '@navigators/NavigatorTypes'

import AuthStack from '@navigators/AuthStack'
import BottomTabStack from '@navigators/BottomTabStack'
import GameStack from '@navigators/GameStack'
import SettingsStack from '@navigators/SettingsStack'
import { getThemeColor } from '@utils'
import AwaitScreen from '@screens/Await'
import QRCodeScanScreen from '@screens/QRCodeScan'
import GameResultScreen from '@screens/GameResultScreen'
import { defaultHeaderStyle } from '@ui-kit/styles'
import ViewPhraseList from '@screens/ViewPhraseList'

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

  /**
   * @description Required to set the navigator stack background when
   * switching application themes so that when you navigate the stack, it does not appear
   * white line at the left edge of the screen
   * @return {Theme}
   */
  const setTheme = (): Theme => {
    return {
      dark: DarkTheme.dark,
      colors: {
        ...DarkTheme.colors,
        background: getThemeColor('BACKGROUND'),
      },
    }
  }

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        navigatorRef != null && forwardRef(navigatorRef)
      }}
      onReady={onReady}
      theme={setTheme()}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: false,
        }}
        initialRouteName="AwaitScreen"
      >
        <Stack.Screen name="AwaitScreen" component={AwaitScreen} />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
        <Stack.Screen name="GameStack" component={GameStack} />
        <Stack.Screen name="SettingsStack" component={SettingsStack} />

        <Stack.Screen name="QRCodeScanScreen" component={QRCodeScanScreen} />

        <Stack.Screen
          name="GameResultScreen"
          component={GameResultScreen}
          options={{
            headerLeft: () => null,
            gestureEnabled: false,
            ...defaultHeaderStyle,
            headerShown: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="ViewPhraseList"
          component={ViewPhraseList}
          options={{
            headerShown: true,
            ...defaultHeaderStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
