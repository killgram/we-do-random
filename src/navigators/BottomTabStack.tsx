import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { WDRIcon } from '@ui-kit/components'

import GameMain from '@screens/GameMain'
import ProfileMain from '@screens/ProfileMain'
import RulesMain from '@screens/RulesMain'
import SettingsMain from '@screens/SettingsMain'
import { getThemeColor } from '@utils'

const Tab = createBottomTabNavigator()

/**
 * @description bottom tab stack
 * @constructor
 */
const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: getThemeColor('TAB_BAR_ACTIVE_TINT_COLOR'),
        tabBarInactiveTintColor: getThemeColor('TAB_BAR_INACTIVE_TINT_COLOR'),
        tabBarStyle: {
          backgroundColor: getThemeColor('BACKGROUND'),
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="GameMain"
        component={GameMain}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <WDRIcon iconName="game" iconSize={size} iconColor={color} />
          },
        }}
      />
      <Tab.Screen
        name="RulesMain"
        component={RulesMain}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <WDRIcon iconName="rules" iconSize={size} iconColor={color} />
            )
          },
        }}
      />
      <Tab.Screen
        name="ProfileMain"
        component={ProfileMain}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <WDRIcon iconName="profile" iconSize={size} iconColor={color} />
            )
          },
        }}
      />
      <Tab.Screen
        name="SettingsMain"
        component={SettingsMain}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <WDRIcon iconName="setting" iconSize={size} iconColor={color} />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}
export default BottomTabStack
