import React from 'react'
import { Text, View } from 'react-native'
import { IRulesMainScreenTypesProps } from './RulesMainTypes'
import getStyle from './RulesMainStyles'
import { WDRContainer } from '@ui-kit/components'

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
    <WDRContainer>
      <View style={styles.container}>
        <Text>
          RulesMainScreen RulesMainScreen RulesMainScreen RulesMainScreen
          RulesMainScreen RulesMainScreen
        </Text>
        <Text>hello 2</Text>
      </View>
    </WDRContainer>
  )
}

export default RulesMainScreen
