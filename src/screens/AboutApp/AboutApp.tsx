import React, { useLayoutEffect, useEffect } from 'react'
import getStyle from './AboutAppStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { IAboutAppScreenProps } from './AboutAppTypes'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native'
import { getThemeColor, openLink } from '@utils'
import DeviceInfo from 'react-native-device-info'
import ruffle from '@assets/img/raffle.png'

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
      <ActivityIndicator
        size="large"
        color={getThemeColor('ACTIVITY_INDICATOR')}
      />
    </View>
  ) : (
    <WDRContainer isTransparentHeader>
      <WDRText isSecondary style={styles.name}>
        {aboutApp?.name}
      </WDRText>

      <View style={styles.sectionTop}>
        <View style={styles.rowSection}>
          <WDRText isSecondary>{t('aboutApp.author')}</WDRText>
          <WDRText isSecondary>{aboutApp?.author}</WDRText>
        </View>

        <View style={styles.rowSection}>
          <WDRText isSecondary>{t('aboutApp.appGit')}</WDRText>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => openLink(aboutApp?.appGit!)}
          >
            <WDRText isLink>{t('aboutApp.link')}</WDRText>
          </TouchableOpacity>
        </View>

        <View style={styles.rowSection}>
          <WDRText isSecondary>{t('aboutApp.authorGit')}</WDRText>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => openLink(aboutApp?.authorGit!)}
          >
            <WDRText isLink>{t('aboutApp.link')}</WDRText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionBottom}>
        <WDRText isSecondary style={styles.versionTitle}>{`${t(
          'aboutApp.version',
        )}:`}</WDRText>
        <WDRText isSecondary style={styles.versionTitle}>
          {DeviceInfo?.getVersion()}
        </WDRText>
      </View>

      <View style={styles.ruffleImgBox}>
        <Image source={ruffle} resizeMode="contain" style={styles.ruffleImg} />
      </View>
    </WDRContainer>
  )
}

export default AboutAppScreen
