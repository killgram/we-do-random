import React from 'react'
import { Button, Text, View } from 'react-native'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { Navigate } from '@navigators'
import { WDRContainer } from '@ui-kit/components'
import firestore from '@react-native-firebase/firestore'

/**
 * @description SignInScreen
 * @param {ISignInScreenTypesProps} props
 * @return {JSX}
 */
const SignInScreen = (props: ISignInScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  console.log('SignInScreen')

  // firestore()
  //   .collection('Users')
  //   .doc('ABC')
  //   .set({
  //     name: 'Ada Lovelace',
  //     age: 30,
  //   })
  //   .then(() => {
  //     console.log('User added!')
  //   })
  //
  // firestore()
  //   .collection('Users')
  //   .doc('ABC')
  //   .onSnapshot((documentSnapshot) => {
  //     console.log('User data: ', documentSnapshot.data())
  //   })

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
