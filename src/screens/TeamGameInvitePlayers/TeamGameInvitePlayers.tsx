import React, { useLayoutEffect } from 'react'
import getStyle from './TeamGameInvitePlayersStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { ITeamGameInvitePlayersScreenProps } from './TeamGameInvitePlayersTypes'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'

/**
 * @description TeamGameInvitePlayers
 * @param {ITeamGameInvitePlayersScreenProps} props
 * @return {JSX}
 */
const TeamGameInvitePlayers = (props: ITeamGameInvitePlayersScreenProps) => {
  const { navigation, cleanGame } = props
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
      headerTitle: t('createGame.invitePlayers'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>TeamGameInvitePlayers</WDRText>
    </WDRContainer>
  )
}

export default TeamGameInvitePlayers
