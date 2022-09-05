import React from 'react'
import { Button, Text, View } from 'react-native'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { Navigate } from '@navigators'

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
    <View style={styles.container}>
      <Text>
        SignInScreen SignInScreen SignInScreen SignInScreen SignInScreen
        SignInScreen
      </Text>
      <Text>hello 2</Text>
      <Button title="to app stack" onPress={Navigate.toAppStack} />
    </View>
  )
}

export default SignInScreen
