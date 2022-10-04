import React, { useLayoutEffect } from 'react'
import { IChangeLanguageScreenTypesProps } from './ChangeLanguageTypes'
import getStyle from './ChangeLanguageStyles'
import {
  WDRContainer,
  WDRText,
  WDRPressableCombineItem,
  WDRIcon,
} from '@ui-kit/components'
import { getThemeColor, setLocale } from '@utils'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import { Navigate } from '@navigators'

import en from '@assets/img/en.png'
import ru from '@assets/img/ru.png'
import cz from '@assets/img/cz.png'
import { Constants } from '@configurations'

/**
 * @description ChangeLanguageScreen
 * @param {IChangeLanguageScreenTypesProps} props
 * @return {JSX}
 */
const ChangeLanguageScreen = (props: IChangeLanguageScreenTypesProps) => {
  const { language, setLanguage, navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const langData = [
    {
      langTag: Constants.APP_LANGUAGES.en.langTag,
      name: Constants.APP_LANGUAGES.en.name,
      img: en,
    },
    {
      langTag: Constants.APP_LANGUAGES.cz.langTag,
      name: Constants.APP_LANGUAGES.cz.name,
      img: cz,
    },
    {
      langTag: Constants.APP_LANGUAGES.ru.langTag,
      name: Constants.APP_LANGUAGES.ru.name,
      img: ru,
    },
  ]

  /**
   * @description handle change lang func
   * @param {string} lang
   */
  const handleChangeLang = (lang: string) => {
    if (language === lang) {
      Navigate.goBack()
    } else {
      setLanguage?.(lang)
      setLocale(lang)
      Navigate.goBack()
    }
  }

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('settings.changeLang'),
    })
  }, [])

  /**
   * @description render lang list
   */
  const renderLanguageList = () => {
    return langData.map((item) => {
      return (
        <WDRPressableCombineItem
          key={item.langTag}
          leftElement={<Image source={item.img} style={styles.flagImage} />}
          bodyElement={<WDRText isSecondary>{item.name}</WDRText>}
          rightElement={
            language === item.langTag && (
              <WDRIcon
                iconName="check-mark"
                iconColor={getThemeColor('CHOSEN_ICON')}
                iconSize={24}
              />
            )
          }
          onPress={() => handleChangeLang(item.langTag)}
          styleBody={styles.bodyContainer}
          styleContainer={styles.container}
        />
      )
    })
  }

  return <WDRContainer isTransparentHeader>{renderLanguageList()}</WDRContainer>
}

export default ChangeLanguageScreen
