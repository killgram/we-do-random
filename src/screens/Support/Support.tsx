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
import { Constants } from '@configurations'

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
    getSupportData?.()
  }, [])

  const handleCopyBtn = (data: string) => {
    copyToClipboard(String(data))
    onSuccessCopyToast()
  }

  const renderHelpDataHelp = () => {
    return supportData?.helpData?.map((item) => {
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

  return (
    <WDRContainer isTransparentHeader>
      <WDRText isSecondary style={styles.writeMeTitle}>
        {t('supportScreen.writeMe')}
      </WDRText>

      <WDRPressableCombineItem
        bodyElement={<WDRText isSecondary>{Constants.emailContact}</WDRText>}
        rightElement={<WDRIcon iconName="copy" />}
        onPress={() => handleCopyBtn(supportData?.email)}
        noPadding
        style={styles.email}
      />

      {supportData?.helpData ? (
        <View style={styles.helpDataBox}>
          <WDRText isSecondary style={styles.helpDataTitle}>
            {t('supportScreen.helpData')}
          </WDRText>
          {renderHelpDataHelp()}
        </View>
      ) : (
        <View style={styles.loadingBox}>
          <ActivityIndicator
            size="large"
            color={getThemeColor('ACTIVITY_INDICATOR')}
          />
        </View>
      )}
    </WDRContainer>
  )
}

export default SupportScreen
