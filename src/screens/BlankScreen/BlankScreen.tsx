import React from 'react'
import { Text, View } from 'react-native'
import { IBlankScreenTypesProps } from './BlankScreenTypes'
import getStyle from './BlankScreenStyles'

/**
 * @description BlankScreen
 * @param {IBlankScreenTypesProps} props
 * @return {JSX}
 */
const BlankScreen = (props: IBlankScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  console.log('BlankScreen')
  return (
    <View style={styles.container}>
      <Text>
        BlankScreen BlankScreen BlankScreen BlankScreen BlankScreen BlankScreen
      </Text>
      <Text>hello 2</Text>
    </View>
  )
}

export default BlankScreen
