import React, { useEffect } from 'react'
import { IInviteModalProps } from './InviteModalTypes'
import getStyle from './InviteModalStyles'
import { TouchableOpacity, View } from 'react-native'
import { WDRCenterModal, WDRIcon, WDRText } from '@ui-kit/components'
import { getThemeColor, playSound, SoundTypes } from '@utils'
import { useTranslation } from 'react-i18next'

const InviteModal = (props: IInviteModalProps) => {
  const {
    isVisible = false,
    onDecline,
    onAccept,
    leadId,
    leaderName,
    gameName,
  } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const handleAccept = () => {
    onAccept(leadId)
  }

  const handleDecline = () => {
    onDecline(leadId)
  }

  useEffect(() => {
    playSound(SoundTypes.INVITE_GAME)
  }, [])

  return (
    <WDRCenterModal isVisible={isVisible}>
      <WDRIcon
        iconName="game"
        iconSize={120}
        iconColor={getThemeColor('CHOSEN_ICON')}
      />
      <WDRText isTitle>{leaderName}</WDRText>
      <WDRText style={styles.modalText}>{t('inviteModal.invToPlay')}</WDRText>
      <WDRText isTitle>{gameName}</WDRText>

      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.choseBtnAccept}
          activeOpacity={0.7}
          onPress={handleAccept}
        >
          <WDRText isTitle>{t('inviteModal.accept')}</WDRText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choseBtnDecline}
          activeOpacity={0.7}
          onPress={handleDecline}
        >
          <WDRText isTitle>{t('inviteModal.decline')}</WDRText>
        </TouchableOpacity>
      </View>
    </WDRCenterModal>
  )
}

export default InviteModal
