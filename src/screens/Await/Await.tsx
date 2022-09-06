import React from 'react'
import getStyle from './AwaitStyles'
import { WDRContainer } from '@ui-kit/components'
import { ActivityIndicator } from 'react-native'

/**
 * @description AwaitScreen
 * @return {JSX}
 */
const AwaitScreen = () => {
  const styles = getStyle()

  return (
    <WDRContainer style={styles.container}>
      <ActivityIndicator size="large" />
    </WDRContainer>
  )
}

export default AwaitScreen
