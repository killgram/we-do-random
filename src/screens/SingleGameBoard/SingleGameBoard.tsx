import React, { useLayoutEffect } from 'react'
import getStyle from './SingleGameBoardStyles'
import { WDRButton, WDRContainer, WDRText } from '@ui-kit/components'
import { ISingleGameBoardScreenProps } from './SingleGameBoardTypes'
import { useTranslation } from 'react-i18next'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import { Navigate } from '@navigators'

/**
 * @description SingleGameBoard
 * @param {ISingleGameBoardScreenProps} props
 * @return {JSX}
 */
const SingleGameBoard = (props: ISingleGameBoardScreenProps) => {
  const { navigation, route, cleanGame } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const exitGame = () => {
    cleanGame?.()
    Navigate.toAppStack()
  }

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={exitGame}
          tintColor={getThemeColor('MAIN_TEXT')}
        />
      ),
      headerTitle: t('game.singleGame'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>{route?.params?.gameName}</WDRText>
    </WDRContainer>
  )
}

export default SingleGameBoard
