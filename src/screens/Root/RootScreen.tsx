import React from 'react'
import { LogBox, View } from 'react-native'
import { IRootScreenProps } from './RootScreenTypes'
import getStyle from './RootScreenStyles'
import { AppNavigator, NavigationService } from '@navigators'
import { NavigatorRefType } from '@navigators/NavigatorTypes'
import Toast from 'react-native-toast-message'
import SuccessCopyToast from '@components/SuccessCopyToast'
import ErrorToast from '@components/ErrorToast'
import SuccessToast from '@components/SuccessToast'
import InviteModal from '@components/InviteModal'
import NewVersionModal from '@components/NewVersionModal'

const RootScreen = (props: IRootScreenProps) => {
  const {
    startup,
    invite,
    declineInvite,
    acceptInvite,
    updateModal,
    cleanNewAppVersion,
  } = props

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
    errorCustom: ({ text1 }: any) => <ErrorToast text={text1} />,
    successCustom: ({ text1 }: any) => <SuccessToast text={text1} />,
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
      {invite?.isVisible && (
        <InviteModal
          isVisible={invite.isVisible}
          leaderName={invite.leaderName!}
          leadId={invite.leadId!}
          gameName={invite.gameName!}
          onAccept={acceptInvite!}
          onDecline={declineInvite!}
        />
      )}
      {updateModal && (
        <NewVersionModal
          isVisible={updateModal}
          closeModal={cleanNewAppVersion!}
        />
      )}
    </View>
  )
}

export default RootScreen
