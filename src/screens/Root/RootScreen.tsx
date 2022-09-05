import React, { useEffect } from 'react'
import { LogBox, View } from 'react-native'
import { IRootScreenProps } from './RootScreenTypes'
import getStyle from './RootScreenStyles'
import { AppNavigator, NavigationService } from '@navigators'
import { NavigatorRefType } from '@navigators/NavigatorTypes'
import firestore from '@react-native-firebase/firestore'

const RootScreen = (props: IRootScreenProps) => {
  const { startup } = props

  const styles = getStyle()

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'Remote debugger is in a background tab which may cause apps' +
      ' to perform slowly',
  ])

  /**
   * @description Run when navigation is ready
   */
  const onReady = () => {
    startup?.()
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc('ABC')
      .onSnapshot((documentSnapshot) => {
        console.log('User data: ', documentSnapshot.data())
      })

    return () => {
      firestore()
        .collection('Users')
        .doc('ABC')
        .set({
          name: 'Ada Lovelace',
          age: 30,
          status: false,
        })
        .then(() => {
          console.log('User added!')
        })
      subscriber()
    }
  }, [])

  return (
    <View style={styles.container}>
      <AppNavigator
        forwardRef={(navigatorRef: NavigatorRefType) => {
          navigatorRef != null &&
            NavigationService.setTopLevelNavigator(navigatorRef)
        }}
        onReady={onReady}
      />
    </View>
  )
}

export default RootScreen
