import React, { useEffect } from 'react'
import { IGameMainScreenTypesProps } from './GameMainTypes'
import getStyle from './GameMainStyles'
import { Navigate } from '@navigators'
import { WDRContainer, WDRText, WDRButton } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { AppState } from 'react-native'
import { dbUpdateStatus } from '@services'

/**
 * @description GameMainScreen
 * @param {IGameMainScreenTypesProps} props
 * @return {JSX}
 */
const GameMainScreen = (props: IGameMainScreenTypesProps) => {
  const { userId } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useEffect(() => {
    userId && dbUpdateStatus(userId, true)

    const subscription = AppState.addEventListener('change', (nextAppState) => {
      switch (nextAppState) {
        case 'active': {
          userId && dbUpdateStatus(userId, true)
          break
        }
        default: {
          userId && dbUpdateStatus(userId, false)
          break
        }
      }
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return (
    <WDRContainer style={styles.container}>
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

export default GameMainScreen
