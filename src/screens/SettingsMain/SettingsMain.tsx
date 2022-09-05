import React from 'react'
import { ISettingsMainScreenTypesProps } from './SettingsMainTypes'
import getStyle from './SettingsMainStyles'
import { WDRContainer, WDRButton, WDRText } from '@ui-kit/components'
import { setLocale } from '@utils'

/**
 * @description SettingsMainScreen
 * @param {ISettingsMainScreenTypesProps} props
 * @return {JSX}
 */
const SettingsMainScreen = (props: ISettingsMainScreenTypesProps) => {
  const { language, setLanguage } = props
  const styles = getStyle()
  console.log('SettingsMainScreen')

  const handleChangeLang = (lang) => {
    setLanguage?.(lang)
    setLocale(lang)
  }

  return (
    <WDRContainer>
      <WDRText isTitle>{`Current: ${language}`}</WDRText>
      <WDRButton title="en" onPress={() => handleChangeLang('en')} />
      <WDRButton title="ru" onPress={() => handleChangeLang('ru')} />
      <WDRButton title="cz" onPress={() => handleChangeLang('cz')} />
    </WDRContainer>
  )
}

export default SettingsMainScreen
