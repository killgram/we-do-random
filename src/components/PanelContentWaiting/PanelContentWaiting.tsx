import React from 'react'
import { View } from 'react-native'
import { WDRText } from '@ui-kit/components'
import { IPanelContentWaitingTypes } from './PanelContentWaitingTypes'
import styles from './PanelContentWaitingStyles'

/**
 * @param { IPanelContentWaitingTypes } props
 * @return { JSX }
 */
const PanelContentWaiting = (props: IPanelContentWaitingTypes) => {
  const { title, contentElement } = props

  return (
    <View style={styles.container}>
      {contentElement || (
        <WDRText isTitle style={styles.textContent}>
          {title || 'Empty'}
        </WDRText>
      )}
    </View>
  )
}

export default PanelContentWaiting
