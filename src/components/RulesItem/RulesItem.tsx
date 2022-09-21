import React from 'react'
import { IRulesItemProps } from './RulesItemTypes'
import getStyle from './RulesItemStyles'
import { WDRText } from '@ui-kit/components'
import { View } from 'react-native'

const RulesItem = (props: IRulesItemProps) => {
  const { header, desc } = props
  const styles = getStyle()

  return (
    <View style={styles.container}>
      <WDRText isTitle style={styles.header}>
        {header}
      </WDRText>
      <WDRText>{desc}</WDRText>
    </View>
  )
}

export default RulesItem
