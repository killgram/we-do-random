import React, { useLayoutEffect } from 'react'
import getStyle from './TeamGameInvitePlayersStyles'
import { WDRButton, WDRContainer, WDRList, WDRText } from '@ui-kit/components'
import { ITeamGameInvitePlayersScreenProps } from './TeamGameInvitePlayersTypes'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import { dbUpdatePlayStatus, dbCloseGame } from '@services'
import TeamGameInviteList from '@components/TeamGameInviteList'

/**
 * @description TeamGameInvitePlayers
 * @param {ITeamGameInvitePlayersScreenProps} props
 * @return {JSX}
 */
const TeamGameInvitePlayers = (props: ITeamGameInvitePlayersScreenProps) => {
  const { navigation, cleanGame, userId, game, kickOffPlayer } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const exitGame = () => {
    userId && dbUpdatePlayStatus(userId, false)
    userId && dbCloseGame(userId)
    cleanGame?.()
    Navigate.toAppStack()
  }

  const totalPlayers = game?.playersList?.length
  const readyPlayers = game?.playersList?.filter((item) => {
    return item.isAccepted === true
  }).length

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={exitGame}
          tintColor={getThemeColor('MAIN_TEXT')}
        />
      ),
      headerTitle: t('createGame.invitePlayers'),
      headerRight: () => (
        <WDRText
          style={styles.headerRight}
        >{`${readyPlayers}/${totalPlayers}`}</WDRText>
      ),
    })
  }, [game])

  const handleDeletePlayer = (id: string) => {
    kickOffPlayer?.(userId!, id)
  }

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRText isTitle style={styles.gameName}>
        {game?.gameName}
      </WDRText>

      <WDRButton
        title={t('teamGame.addPlayer')}
        onPress={Navigate.toAddPlayersIntoGame}
      />

      <WDRButton
        title={t('teamGame.begin')}
        onPress={Navigate.toTeamGameBoard}
        style={styles.beginBtn}
        // TODO check this
        isDisabled={!(totalPlayers === readyPlayers && totalPlayers! !== 1)}
      />

      <WDRList
        isBounces
        listItems={game?.playersList}
        listStyles={styles.listStyle}
        titleEmptyComponent={t('teamGame.emptyPlayersList')}
        renderListItem={({ item }) => (
          <TeamGameInviteList
            leadId={userId}
            username={item.username}
            userId={item.userId}
            onPress={handleDeletePlayer}
            isLead={true}
            isAccepted={item.isAccepted}
          />
        )}
      />
    </WDRContainer>
  )
}

export default TeamGameInvitePlayers
