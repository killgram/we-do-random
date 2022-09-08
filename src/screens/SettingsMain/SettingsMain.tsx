import React, { useState } from 'react'
import { ISettingsMainScreenTypesProps } from './SettingsMainTypes'
import getStyle from './SettingsMainStyles'
import {
  WDRContainer,
  WDRText,
  WDRPressableCombineItem,
  WDRIcon,
  WDRButton,
  WDRCenterModal,
} from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import en from '@assets/img/en.png'
import ru from '@assets/img/ru.png'
import cz from '@assets/img/cz.png'
import { Navigate } from '@navigators'
import { getThemeColor } from '@utils'

/**
 * @description SettingsMainScreen
 * @param {ISettingsMainScreenTypesProps} props
 * @return {JSX}
 */
const SettingsMainScreen = (props: ISettingsMainScreenTypesProps) => {
  const { language, logout } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  const calcImageSource = () => {
    switch (language) {
      case 'ru': {
        return ru
      }
      case 'cz': {
        return cz
      }
      default: {
        return en
      }
    }
  }

  const onCloseModal = () => {
    setIsVisible(!isVisible)
  }

  const onExit = () => {
    logout?.()
    onCloseModal()
  }

  return (
    <WDRContainer>
      <WDRPressableCombineItem
        bodyElement={<WDRText isTitle>{t('settings.lang')}</WDRText>}
        rightElement={
          <Image source={calcImageSource()} style={styles.flagImage} />
        }
        onPress={Navigate.toChangeLanguageScreen}
        styleContainer={styles.combineContainer}
      />
      <WDRPressableCombineItem
        bodyElement={<WDRText isTitle>{t('settings.support')}</WDRText>}
        rightElement={<WDRIcon iconName="bracket-right" iconSize={16} />}
        onPress={Navigate.toSupportScreen}
        styleContainer={styles.combineContainer}
      />
      <WDRPressableCombineItem
        bodyElement={<WDRText isTitle>{t('settings.aboutApp')}</WDRText>}
        rightElement={<WDRIcon iconName="bracket-right" iconSize={16} />}
        onPress={Navigate.toAboutAppScreen}
        styleContainer={styles.combineContainer}
      />
      <WDRButton
        title={t('settings.logout')}
        style={styles.logoutBtn}
        onPress={onCloseModal}
      />

      <WDRCenterModal isVisible={isVisible} closeHandler={onCloseModal}>
        <WDRIcon
          iconName="exit"
          iconSize={60}
          iconColor={getThemeColor('EXIT_ICON')}
        />
        <WDRText isTitle style={styles.modalText}>
          {t('settings.sureAboutExit')}
        </WDRText>
        <WDRButton
          title={t('settings.logout')}
          style={styles.modalLogoutBtn}
          onPress={onExit}
        />
      </WDRCenterModal>
    </WDRContainer>
  )
}

export default SettingsMainScreen
