import React, { useLayoutEffect } from 'react'
import getStyle from './SingleGameBoardStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { ISingleGameBoardScreenProps } from './SingleGameBoardTypes'
import { useTranslation } from 'react-i18next'

/**
 * @description SingleGameBoard
 * @param {ISingleGameBoardScreenProps} props
 * @return {JSX}
 */
const SingleGameBoard = (props: ISingleGameBoardScreenProps) => {
  const { navigation, route } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
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
