import React from 'react'
import getStyle from './AwaitStyles'
import { WDRContainer } from '@ui-kit/components'
import { ActivityIndicator } from 'react-native'
import { getThemeColor } from '@utils'

/**
 * @description AwaitScreen
 * @return {JSX}
 */
const AwaitScreen = () => {
  const styles = getStyle()

  return (
    <WDRContainer style={styles.container}>
      <ActivityIndicator size="large" color={getThemeColor('COUNTRY_BLUE')} />
    </WDRContainer>
  )
}

export default AwaitScreen
