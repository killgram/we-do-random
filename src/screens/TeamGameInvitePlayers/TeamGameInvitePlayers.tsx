import React, { useEffect, useLayoutEffect, useRef } from 'react'
import getStyle from './TeamGameInvitePlayersStyles'
import { WDRButton, WDRContainer, WDRList, WDRText } from '@ui-kit/components'
import { ITeamGameInvitePlayersScreenProps } from './TeamGameInvitePlayersTypes'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import {
  dbUpdatePlayStatus,
  dbCloseGame,
  dbUpdateGameStatus,
  snapUpdateViewGame,
} from '@services'
import TeamGameInviteList from '@components/TeamGameInviteList'
import { useIsFocused } from '@react-navigation/native'

/**
 * @description TeamGameInvitePlayers
 * @param {ITeamGameInvitePlayersScreenProps} props
 * @return {JSX}
 */
const TeamGameInvitePlayers = (props: ITeamGameInvitePlayersScreenProps) => {
  const {
    navigation,
    cleanGame,
    userId,
    game,
    kickOffPlayer,
    updateGameStatus,
    updateGameView,
  } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const isFocused = useIsFocused()
  const updateDBPlayersList = useRef<any>([])

  /**
   * @description exit game func
   */
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
          tintColor={getThemeColor('SECONDARY_TEXT')}
        />
      ),
      headerTitle: t('createGame.invitePlayers'),
      headerRight: () =>
        totalPlayers !== 1 && (
          <WDRText
            isSecondary
            style={styles.headerRight}
          >{`${readyPlayers}/${totalPlayers}`}</WDRText>
        ),
    })
  }, [game?.playersList])

  /**
   * @description update status
   * @param data
   */
  const updateInviteStatusData = (data) => {
    updateGameView?.(data)
  }

  useEffect(() => {
    if (isFocused) {
      updateDBPlayersList.current = snapUpdateViewGame(
        userId!,
        updateInviteStatusData,
      )
    }
    return () => {
      updateDBPlayersList.current?.()
    }
  }, [isFocused])

  /**
   * @description handle delete player
   * @param {string} id
   */
  const handleDeletePlayer = (id: string) => {
    kickOffPlayer?.(userId!, id)
  }

  /**
   * @description handle begin btn
   */
  const handleBegin = () => {
    Navigate.toTeamGameBoard()
    updateGameStatus?.('playing')
    userId && dbUpdateGameStatus(userId, 'playing')
  }

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRText isSecondary style={styles.gameName}>
        {game?.gameName}
      </WDRText>

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

      <WDRButton
        title={t('teamGame.addPlayer')}
        onPress={Navigate.toAddPlayersIntoGame}
        isSecondary
      />

      <WDRButton
        title={t('teamGame.begin')}
        onPress={handleBegin}
        style={styles.beginBtn}
        isDisabled={!(totalPlayers === readyPlayers && totalPlayers! !== 1)}
        isSecondary
      />
    </WDRContainer>
  )
}

export default TeamGameInvitePlayers
