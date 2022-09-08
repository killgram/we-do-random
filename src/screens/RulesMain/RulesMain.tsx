import React from 'react'
import { IRulesMainScreenTypesProps } from './RulesMainTypes'
import getStyle from './RulesMainStyles'
import { WDRButton, WDRContainer, WDRText } from '@ui-kit/components'
import { Navigate } from '@navigators'
import { useTranslation } from 'react-i18next'

/**
 * @description RulesMainScreen
 * @param {IRulesMainScreenTypesProps} props
 * @return {JSX}
 */
const RulesMainScreen = (props: IRulesMainScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  const { t } = useTranslation()

  return (
    <WDRContainer>
      <WDRText>Hello, test text components</WDRText>
      <WDRText isTitle>Hello, test text components title</WDRText>
      <WDRText isSecondary>Hello, test text components secondary</WDRText>
      <WDRText isLink>Hello, test text components link</WDRText>
      <WDRText isError>Hello, test text components error</WDRText>
      <WDRText isTitle>{t('test.helloWorld')}</WDRText>

      <WDRButton title="to blank, static" onPress={Navigate.toBlank} />
      <WDRButton isSecondary title="secondary " />
      <WDRButton isLoading title="loading" />
      <WDRButton isDisabled title="disabled" />
      <WDRButton isDisabled isSecondary title="disabled secondary" />
      <WDRButton isTransparent title="transparent" />
    </WDRContainer>
  )
}

export default RulesMainScreen
