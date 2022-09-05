import React from 'react'
import { Text, View } from 'react-native'
import { IRulesMainScreenTypesProps } from './RulesMainTypes'
import getStyle from './RulesMainStyles'

/**
 * @description RulesMainScreen
 * @param {IRulesMainScreenTypesProps} props
 * @return {JSX}
 */
const RulesMainScreen = (props: IRulesMainScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  console.log('RulesMainScreen')
  return (
    <View style={styles.container}>
      <Text>
        RulesMainScreen RulesMainScreen RulesMainScreen RulesMainScreen
        RulesMainScreen RulesMainScreen
      </Text>
      <Text>hello 2</Text>
    </View>
  )
}

export default RulesMainScreen
