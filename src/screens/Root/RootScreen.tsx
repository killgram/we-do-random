import React from 'react'
import { LogBox, View, Text } from 'react-native'
import { IRootScreenProps } from './RootScreenTypes'
import { Domains } from '@configurations'

import getStyle from './RootScreenStyles'
import { WDRIcon } from '@ui-kit/components'

const RootScreen = (props: IRootScreenProps) => {
  const { startup } = props

  const styles = getStyle()

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'Remote debugger is in a background tab which may cause apps' +
      ' to perform slowly',
  ])
  startup?.()
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
      <Text style={styles.text}>{Domains.getTestEnv()}</Text>
      <WDRIcon iconName="setting" />
      <WDRIcon iconName="arrow-right" />
      <WDRIcon iconName="arrow-left" />
    </View>
  )
}

export default RootScreen
