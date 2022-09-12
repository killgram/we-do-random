import React from 'react'
import { IRulesMainScreenTypesProps } from './RulesMainTypes'
import getStyle from './RulesMainStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
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
      <WDRText>Правила</WDRText>
    </WDRContainer>
  )
}

export default RulesMainScreen
