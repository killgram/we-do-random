import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()

import CreateGameScreen from '@screens/CreateGame'
import FriendListScreen from '@screens/FriendList'
import PhraseListScreen from '@screens/PhraseList'
import AddFriendScreen from '@screens/AddFriend'
import AddPhrase from '@screens/AddPhrase'

/**
 * @description game stack
 * @constructor
 */
const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultHeaderStyle,
        headerShown: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="CreateGameScreen" component={CreateGameScreen} />
      <Stack.Screen name="FriendListScreen" component={FriendListScreen} />
      <Stack.Screen name="PhraseListScreen" component={PhraseListScreen} />
      <Stack.Screen name="AddFriendScreen" component={AddFriendScreen} />
      <Stack.Screen name="AddPhrase" component={AddPhrase} />
    </Stack.Navigator>
  )
}
export default GameStack
