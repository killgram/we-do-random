import React, { useLayoutEffect } from 'react'
import getStyle from './SupportStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { ISupportScreenProps } from './SupportTypes'

/**
 * @description SupportScreen
 * @param {ISupportScreenProps} props
 * @return {JSX}
 */
const SupportScreen = (props: ISupportScreenProps) => {
  const { navigation } = props

  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('settings.support'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>SupportScreen</WDRText>
    </WDRContainer>
  )
}

export default SupportScreen
