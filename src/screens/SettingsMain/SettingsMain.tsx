import React from 'react'
import { Text, View } from 'react-native'
import { ISettingsMainScreenTypesProps } from './SettingsMainTypes'
import getStyle from './SettingsMainStyles'
import { WDRContainer } from '@ui-kit/components'

/**
 * @description SettingsMainScreen
 * @param {ISettingsMainScreenTypesProps} props
 * @return {JSX}
 */
const SettingsMainScreen = (props: ISettingsMainScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  console.log('SettingsMainScreen')
  return (
    <WDRContainer>
      <View style={styles.container}>
        <Text>
          SettingsMainScreen SettingsMainScreen SettingsMainScreen
          SettingsMainScreen SettingsMainScreen SettingsMainScreen
        </Text>
        <Text>hello 2</Text>
      </View>
    </WDRContainer>
  )
}

export default SettingsMainScreen
