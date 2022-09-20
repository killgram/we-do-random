import React, { useLayoutEffect, useEffect } from 'react'
import getStyle from './AboutAppStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { IAboutAppScreenProps } from './AboutAppTypes'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { getThemeColor, openLink } from '@utils'
import DeviceInfo from 'react-native-device-info'

/**
 * @description AboutAppScreen
 * @param {IAboutAppScreenProps} props
 * @return {JSX}
 */
const AboutAppScreen = (props: IAboutAppScreenProps) => {
  const { navigation, getAboutApp, aboutApp, isLoading } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('settings.aboutApp'),
    })
  }, [])

  useEffect(() => {
    !aboutApp && getAboutApp?.()
  }, [])

  return isLoading ? (
    <View style={styles.loadingBox}>
      <ActivityIndicator size="large" color={getThemeColor('MAIN_TEXT')} />
    </View>
  ) : (
    <WDRContainer isTransparentHeader>
      <WDRText isTitle style={styles.name}>
        {aboutApp?.name}
      </WDRText>

      <View style={styles.sectionTop}>
        <View style={styles.rowSection}>
          <WDRText isTitle>{t('aboutApp.author')}</WDRText>
          <WDRText>{aboutApp?.author}</WDRText>
        </View>

        <View style={styles.rowSection}>
          <WDRText isTitle>{t('aboutApp.appGit')}</WDRText>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => openLink(aboutApp?.appGit!)}
          >
            <WDRText isLink>{t('aboutApp.link')}</WDRText>
          </TouchableOpacity>
        </View>

        <View style={styles.rowSection}>
          <WDRText isTitle>{t('aboutApp.authorGit')}</WDRText>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => openLink(aboutApp?.authorGit!)}
          >
            <WDRText isLink>{t('aboutApp.link')}</WDRText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionBottom}>
        <WDRText style={styles.versionTitle}>{`${t(
          'aboutApp.version',
        )}:`}</WDRText>
        <WDRText style={styles.versionTitle}>
          {DeviceInfo?.getVersion()}
        </WDRText>
      </View>
    </WDRContainer>
  )
}

export default AboutAppScreen
