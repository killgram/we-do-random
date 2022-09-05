import React from 'react'
import { Button, Text, View } from 'react-native'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { Navigate } from '@navigators'
import { WDRContainer } from '@ui-kit/components'

/**
 * @description SignInScreen
 * @param {ISignInScreenTypesProps} props
 * @return {JSX}
 */
const SignInScreen = (props: ISignInScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  console.log('SignInScreen')
  return (
    <WDRContainer>
      <View style={styles.container}>
        <Text>
          SignInScreen SignInScreen SignInScreen SignInScreen SignInScreen
          SignInScreen
        </Text>
        <Text>hello 2</Text>
        <Button title="to app stack" onPress={Navigate.toAppStack} />
      </View>
    </WDRContainer>
  )
}

export default SignInScreen
