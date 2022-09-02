import React from 'react'
import { LogBox, View, Text } from 'react-native'
import { IRootScreenProps } from './RootScreenTypes'
import { Domains } from '@configurations'

import getStyle from './RootScreenStyles'

const RootScreen = (props: IRootScreenProps) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'Remote debugger is in a background tab which may cause apps' +
      ' to perform slowly',
  ])

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

export default RootScreen
