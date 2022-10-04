import React from 'react'
import { IRulesItemProps } from './RulesItemTypes'
import getStyle from './RulesItemStyles'
import { WDRText } from '@ui-kit/components'
import { View } from 'react-native'

/**
 * @description rules item
 * @param {IRulesItemProps} props
 * @constructor
 */
const RulesItem = (props: IRulesItemProps) => {
  const { header, desc } = props
  const styles = getStyle()

  return (
    <View style={styles.container}>
      <WDRText isSecondary size={20} style={styles.header}>
        {header}
      </WDRText>
      <WDRText style={styles.desc} isSecondary>
        {desc}
      </WDRText>
    </View>
  )
}

export default RulesItem
