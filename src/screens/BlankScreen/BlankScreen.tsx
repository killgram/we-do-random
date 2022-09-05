import React from 'react'
import { Text, View } from 'react-native'
import { IBlankScreenTypesProps } from './BlankScreenTypes'
import getStyle from './BlankScreenStyles'
import { WDRContainer } from '@ui-kit/components'

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
    <WDRContainer isTransparentHeader>
      <Text>
        BlankScreen BlankScreen BlankScreen BlankScreen BlankScreen BlankScreen
      </Text>
      <Text>hello 2</Text>
    </WDRContainer>
  )
}

export default BlankScreen
