import React, { useLayoutEffect } from 'react'
import getStyle from './AboutAppStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { IAboutAppScreenProps } from './AboutAppTypes'
import { useTranslation } from 'react-i18next'

/**
 * @description AboutAppScreen
 * @param {IAboutAppScreenProps} props
 * @return {JSX}
 */
const AboutAppScreen = (props: IAboutAppScreenProps) => {
  const { navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('settings.aboutApp'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>AboutAppScreen</WDRText>
    </WDRContainer>
  )
}

export default AboutAppScreen
