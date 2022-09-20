import React, { useLayoutEffect, useEffect } from 'react'
import getStyle from './SupportStyles'
import {
  WDRContainer,
  WDRIcon,
  WDRPressableCombineItem,
  WDRText,
} from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { ISupportScreenProps } from './SupportTypes'
import { ActivityIndicator, View } from 'react-native'
import {
  copyToClipboard,
  getThemeColor,
  keyGenerate,
  onSuccessCopyToast,
} from '@utils'
import SupportHelpItem from '@components/SupportHelpItem'

/**
 * @description SupportScreen
 * @param {ISupportScreenProps} props
 * @return {JSX}
 */
const SupportScreen = (props: ISupportScreenProps) => {
  const { navigation, getSupportData, supportData, isLoading } = props

  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('settings.support'),
    })
  }, [])

  useEffect(() => {
    !supportData && getSupportData?.()
  }, [])

  const handleCopyBtn = (data: string) => {
    copyToClipboard(String(data))
    onSuccessCopyToast()
  }

  const renderCryptoHelp = () => {
    return supportData?.crypto?.map((item) => {
      return (
        <SupportHelpItem
          key={keyGenerate()}
          title={Object.keys(item)[0]}
          extractor={String(Object.values(item)[0])}
          onPress={() => handleCopyBtn(String(Object.values(item)[0]))}
        />
      )
    })
  }

  const renderSubscribesHelp = () => {
    return supportData?.subscribes?.map((item) => {
      return (
        <SupportHelpItem
          key={keyGenerate()}
          title={Object.keys(item)[0]}
          extractor={String(Object.values(item)[0])}
          onPress={() => handleCopyBtn(String(Object.values(item)[0]))}
        />
      )
    })
  }

  return isLoading ? (
    <View style={styles.loadingBox}>
      <ActivityIndicator size="large" color={getThemeColor('MAIN_TEXT')} />
    </View>
  ) : (
    <WDRContainer isTransparentHeader>
      <WDRText style={styles.writeMeTitle}>
        {t('supportScreen.writeMe')}
      </WDRText>

      <WDRPressableCombineItem
        bodyElement={<WDRText isTitle>{supportData?.email}</WDRText>}
        rightElement={<WDRIcon iconName="copy" />}
        onPress={() => handleCopyBtn(supportData?.email)}
        noPadding
        style={styles.email}
      />

      <WDRText style={styles.distributionTitle}>
        {t('supportScreen.distributionRules')}
      </WDRText>

      {supportData?.crypto && (
        <View style={styles.cryptoBox}>
          <WDRText style={styles.cryptoTitle}>
            {t('supportScreen.cryptoHelp')}
          </WDRText>
          {renderCryptoHelp()}
        </View>
      )}

      {supportData?.subscribes && <View>{renderSubscribesHelp()}</View>}
    </WDRContainer>
  )
}

export default SupportScreen
