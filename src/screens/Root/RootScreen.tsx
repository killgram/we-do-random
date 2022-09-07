import React from 'react'
import { LogBox, View } from 'react-native'
import { IRootScreenProps } from './RootScreenTypes'
import getStyle from './RootScreenStyles'
import { AppNavigator, NavigationService } from '@navigators'
import { NavigatorRefType } from '@navigators/NavigatorTypes'
import Toast from 'react-native-toast-message'
import SuccessCopyToast from '@components/SuccessCopyToast'

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

  const toastConfig = {
    successCopy: SuccessCopyToast,
  }

  return (
    <View style={styles.container}>
      <AppNavigator
        forwardRef={(navigatorRef: NavigatorRefType) => {
          navigatorRef != null &&
            NavigationService.setTopLevelNavigator(navigatorRef)
        }}
        onReady={onReady}
      />
      <Toast config={toastConfig} />
    </View>
  )
}

export default RootScreen
