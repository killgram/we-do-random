import React, { useEffect, useLayoutEffect, useRef } from 'react'
import getStyle from './ViewInvitePlayersStyles'
import { WDRContainer, WDRList, WDRText } from '@ui-kit/components'
import { IViewInvitePlayersScreenProps } from './ViewInvitePlayersTypes'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import { dbUpdatePlayStatus, snapUpdateViewGame } from '@services'
import TeamGameInviteList from '@components/TeamGameInviteList'
import { useIsFocused } from '@react-navigation/native'
import { ActivityIndicator, View } from 'react-native'

/**
 * @description ViewInvitePlayers
 * @param {IViewInvitePlayersScreenProps} props
 * @return {JSX}
 */
const ViewInvitePlayers = (props: IViewInvitePlayersScreenProps) => {
  const {
    navigation,
    cleanGame,
    userId,
    game,
    route,
    updateGameView,
    kickOffPlayer,
  } = props

  const styles = getStyle()
  const { t } = useTranslation()
  const isFocused = useIsFocused()
  let updateDBGame = useRef<any>([])

  const exitGame = () => {
    userId && dbUpdatePlayStatus(userId, false)
    cleanGame?.()
    userId && kickOffPlayer?.(game?.gameLead?.userId!, userId)
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
  }, [game?.playersList])

  const updateInviteStatusData = (data) => {
    updateGameView?.(data)
  }

  useEffect(() => {
    if (isFocused) {
      updateDBGame.current = snapUpdateViewGame(
        route?.params?.leadId!,
        updateInviteStatusData,
      )
    }
    return () => {
      updateDBGame.current?.()
    }
  }, [isFocused])

  useEffect(() => {
    if (game?.playersList?.length && game?.gameStatus !== 'inviting') {
      Navigate.toTeamGameBoard()
    }
  }, [game?.gameStatus])

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRText isTitle style={styles.gameName}>
        {game?.gameName}
      </WDRText>

      <View style={styles.waiting}>
        <WDRText isTitle style={styles.waitText}>
          {t('teamGame.waitPlayers')}
        </WDRText>
        <ActivityIndicator size="small" color={getThemeColor('MAIN_TEXT')} />
      </View>

      <WDRList
        isBounces
        listItems={game?.playersList}
        listStyles={styles.listStyle}
        titleEmptyComponent={t('teamGame.emptyPlayersList')}
        renderListItem={({ item }) => (
          <TeamGameInviteList
            leadId={game?.gameLead?.userId}
            username={item.username}
            userId={item.userId}
            isLead={false}
            isAccepted={item.isAccepted}
          />
        )}
      />
    </WDRContainer>
  )
}

export default ViewInvitePlayers
