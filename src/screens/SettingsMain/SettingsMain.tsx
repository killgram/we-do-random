import React from 'react'
import { ISettingsMainScreenTypesProps } from './SettingsMainTypes'
import getStyle from './SettingsMainStyles'
import {
  WDRContainer,
  WDRText,
  WDRPressableCombineItem,
} from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import en from '@assets/img/en.png'
import ru from '@assets/img/ru.png'
import cz from '@assets/img/cz.png'
import { Navigate } from '@navigators'

/**
 * @description SettingsMainScreen
 * @param {ISettingsMainScreenTypesProps} props
 * @return {JSX}
 */
const SettingsMainScreen = (props: ISettingsMainScreenTypesProps) => {
  const { language } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const toChangeLangScreen = () => {
    Navigate.toChangeLanguageScreen()
  }

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

  return (
    <WDRContainer>
      <WDRPressableCombineItem
        bodyElement={<WDRText isTitle>{t('settings.lang')}</WDRText>}
        rightElement={
          <Image source={calcImageSource()} style={styles.flagImage} />
        }
        onPress={toChangeLangScreen}
      />
    </WDRContainer>
  )
}

export default SettingsMainScreen
