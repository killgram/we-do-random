import React, { useLayoutEffect } from 'react'
import getStyle from './TeamGameBoardStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { ITeamGameBoardScreenProps } from './TeamGameBoardTypes'
import { useTranslation } from 'react-i18next'

/**
 * @description TeamGameBoard
 * @param {ITeamGameBoardScreenProps} props
 * @return {JSX}
 */
const TeamGameBoard = (props: ITeamGameBoardScreenProps) => {
  const { navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.teamGame'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>TeamGameBoard</WDRText>
    </WDRContainer>
  )
}

export default TeamGameBoard
