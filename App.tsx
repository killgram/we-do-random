import React from 'react'
import type { Node } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { Domains } from '@configurations'

const App: () => Node = () => {
  console.log(Domains.getTestEnv())
  return (
    <View>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{Domains.getTestEnv()}</Text>
    </View>
  )
}

export default App
