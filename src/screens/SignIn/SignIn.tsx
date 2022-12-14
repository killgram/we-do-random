import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { ISignInScreenTypesProps } from './SignInTypes'
import getStyle from './SignInStyles'
import { WDRButton, WDRContainer, WDRText, WDRInput } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { Constants } from '@configurations'
import en from '@assets/img/en.png'
import cz from '@assets/img/cz.png'
import ru from '@assets/img/ru.png'
import ruffle from '@assets/img/raffle.png'
import SignInLangCard from '@components/SignInLangCard'
import { setLocale } from '@utils'

/**
 * @description SignInScreen
 * @param {ISignInScreenTypesProps} props
 * @return {JSX}
 */
const SignInScreen = (props: ISignInScreenTypesProps) => {
  const { language, setLanguage, login, isLoading } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const [username, setUsername] = useState('')

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
   * @description handle change lang
   * @param {string} lang
   */
  const handleChangeLang = (lang: string) => {
    setLanguage?.(lang)
    setLocale(lang)
  }

  /**
   * @description render lang elements
   */
  const renderLangElements = () => {
    return langData.map((item) => {
      return (
        <SignInLangCard
          img={item.img}
          name={item.name}
          key={item.langTag}
          langTag={item.langTag}
          isActive={language === item.langTag}
          changeLang={handleChangeLang}
        />
      )
    })
  }

  /**
   * @description handle change username func
   * @param {string} e
   */
  const handleChangeUsername = (e: string) => {
    setUsername(e)
  }

  /**
   * @description login func
   */
  const onLogin = () => {
    login?.(username)
  }

  return (
    <WDRContainer style={styles.container}>
      <View style={styles.sectionTop}>
        <WDRText isTitle style={styles.titleTop}>
          {t('signIn.chooseLang')}
        </WDRText>
        <View style={styles.langListContainer}>{renderLangElements()}</View>
      </View>

      <WDRText isTitle style={styles.titleBottom}>
        {t('signIn.introduce')}
      </WDRText>

      <WDRInput
        placeholder={t('signIn.namePlaceholder')}
        value={username}
        onChangeText={handleChangeUsername}
      />

      <WDRButton
        title={t('signIn.enter')}
        isDisabled={username.length === 0}
        onPress={onLogin}
        isLoading={isLoading}
      />

      <Image source={ruffle} style={styles.ruffleImg} />
    </WDRContainer>
  )
}

export default SignInScreen
