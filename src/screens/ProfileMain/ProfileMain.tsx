import React from 'react'
import { TouchableOpacity } from 'react-native'

import { IProfileMainScreenTypesProps } from './ProfileMainTypes'
import getStyle from './ProfileMainStyles'
import {
  WDRCombineItem,
  WDRContainer,
  WDRIcon,
  WDRText,
} from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import {
  chunkSubstr,
  copyToClipboard,
  getThemeColor,
  onSuccessCopyToast,
} from '@utils'
import QRCodeView from '@components/QRCodeView'

/**
 * @description ProfileMainScreen
 * @param {IProfileMainScreenTypesProps} props
 * @return {JSX}
 */
const ProfileMainScreen = (props: IProfileMainScreenTypesProps) => {
  const { userId, username } = props
  const styles = getStyle()
  const { t } = useTranslation()

  /**
   *@description splits userId into 4 chunks
   */
  const renderUserId = () => {
    return userId && chunkSubstr(userId, 4).join(' : ')
  }

  const handleCopyBtn = () => {
    userId && copyToClipboard(userId)
    onSuccessCopyToast()
  }

  return (
    <WDRContainer>
      <WDRText isSecondary style={styles.usernameText}>
        {username}
      </WDRText>

      <WDRText isSecondary style={styles.userIdTitle} size={20}>
        {t('profile.yourKey')}
      </WDRText>

      <QRCodeView value={userId} />

      <WDRCombineItem
        bodyElement={
          <WDRText isSecondary style={styles.userIdNumbers}>
            {renderUserId()}
          </WDRText>
        }
        rightElement={
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.copyBtn}
            onPress={handleCopyBtn}
          >
            <WDRIcon
              iconName="copy"
              iconColor={getThemeColor('SECONDARY_TEXT')}
            />
          </TouchableOpacity>
        }
        style={styles.copyBtnContainer}
      />
    </WDRContainer>
  )
}

export default ProfileMainScreen
