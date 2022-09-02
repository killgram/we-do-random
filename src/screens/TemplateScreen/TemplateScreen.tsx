import React from 'react'
import { Button, Text, View } from 'react-native'
import { ITemplateScreenProps } from './TemplateScreenTypes'
import getStyle from './TemplateScreenStyles'
import { Navigate } from '@navigators'

/**
 * @description TemplateScreen
 * @param {ITemplateScreenProps} props
 * @return {JSX}
 */
const TemplateScreen = (props: ITemplateScreenProps) => {
  const {} = props
  const styles = getStyle()
  console.log('TemplateScreen')

  return (
    <View style={styles.container}>
      <Text>
        TemplateScreen TemplateScreen TemplateScreen TemplateScreen
        TemplateScreen TemplateScreen
      </Text>

      <Button title="to blank" onPress={Navigate.toBlank} />
    </View>
  )
}

export default TemplateScreen
