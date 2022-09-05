import React from 'react'
import { Text, View } from 'react-native'
import { ISettingsMainScreenTypesProps } from './SettingsMainTypes'
import getStyle from './SettingsMainStyles'

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
    <View style={styles.container}>
      <Text>
        SettingsMainScreen SettingsMainScreen SettingsMainScreen
        SettingsMainScreen SettingsMainScreen SettingsMainScreen
      </Text>
      <Text>hello 2</Text>
    </View>
  )
}

export default SettingsMainScreen
