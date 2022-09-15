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
import SingleGameBoard from '@screens/SingleGameBoard'
import TeamGameBoard from '@screens/TeamGameBoard'
import TeamGameInvitePlayers from '@screens/TeamGameInvitePlayers'
import AddPhraseIntoGameScreen from '@screens/AddPhraseIntoGame'
import AddPlayersIntoGame from '@screens/AddPlayersIntoGame'
import AddFriendIntoGameScreen from '@screens/AddFriendIntoGame'
import ViewInvitePlayers from '@screens/ViewInvitePlayers'

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
      <Stack.Screen name="SingleGameBoard" component={SingleGameBoard} />
      <Stack.Screen name="TeamGameBoard" component={TeamGameBoard} />
      <Stack.Screen
        name="TeamGameInvitePlayers"
        component={TeamGameInvitePlayers}
      />
      <Stack.Screen
        name="AddPhraseIntoGameScreen"
        component={AddPhraseIntoGameScreen}
      />
      <Stack.Screen name="AddPlayersIntoGame" component={AddPlayersIntoGame} />
      <Stack.Screen
        name="AddFriendIntoGameScreen"
        component={AddFriendIntoGameScreen}
      />
      <Stack.Screen name="ViewInvitePlayers" component={ViewInvitePlayers} />
    </Stack.Navigator>
  )
}
export default GameStack
