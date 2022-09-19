import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import getStyle from './TeamGameBoardStyles'
import {
  WDRButton,
  WDRCombineItem,
  WDRContainer,
  WDRIcon,
  WDRList,
  WDRText,
} from '@ui-kit/components'
import { ITeamGameBoardScreenProps } from './TeamGameBoardTypes'
import { useTranslation } from 'react-i18next'
import {
  dbCloseGame,
  dbUpdatePlayStatus,
  snapUpdateViewGame,
  dbDeletePhrase,
  dbUpdateReadyStatus,
  snapUpdateFriendStatus,
  dbUpdateGameStatus,
} from '@services'
import { Navigate } from '@navigators'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import { useIsFocused } from '@react-navigation/native'
import ReadyButton from '@components/ReadyButton'
import GamePhraseItem from '@components/GamePhraseItem'
import { View } from 'react-native'

/**
 * @description TeamGameBoard
 * @param {ITeamGameBoardScreenProps} props
 * @return {JSX}
 */
const TeamGameBoard = (props: ITeamGameBoardScreenProps) => {
  const {
    navigation,
    cleanGame,
    userId,
    game,
    updateGameStatus,
    updateGameView,
    startFinishGame,
    kickOffPlayer,
  } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const isFocused = useIsFocused()
  let updateDBPlayersList = useRef<any>([])
  let updateLead

  const isLead = game?.gameLead?.userId === userId

  const [isReady, setIsReady] = useState(false)
  const [gameLock, setGameLock] = useState(true)
  const [isLeadOnline, setIsLeadOnline] = useState(false)
  const isGameCalcWinner = game?.finish?.isLoading

  const exitGameLeader = () => {
    userId && dbUpdatePlayStatus(userId, false)
    userId && dbCloseGame(userId)
    cleanGame?.()
    Navigate.toAppStack()
  }

  const exitGameUser = () => {
    userId && dbUpdatePlayStatus(userId, false)
    cleanGame?.()
    userId && kickOffPlayer?.(game?.gameLead?.userId!, userId)
    Navigate.toAppStack()
  }

  const totalPlayers = game?.playersList?.length
  const readyPlayers =
    game?.readyList?.filter((item) => {
      return item
    }).length ?? 0

  const exitGame = () => {
    isLead ? exitGameLeader() : exitGameUser()
  }

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={exitGame}
          tintColor={getThemeColor('MAIN_TEXT')}
        />
      ),
      headerTitle: t('game.teamGame'),
      headerRight: () => (
        <WDRText
          style={styles.headerRight}
        >{`${readyPlayers}/${totalPlayers}`}</WDRText>
      ),
    })
  }, [game])

  const updateInviteStatusData = (data) => {
    updateGameView?.(data)
  }

  const updateLeadStatus = (id: string, status: boolean) => {
    setIsLeadOnline(status)
  }

  useEffect(() => {
    if (isFocused) {
      updateDBPlayersList.current = snapUpdateViewGame(
        game?.gameLead?.userId!,
        updateInviteStatusData,
      )

      if (!isLead) {
        updateLead = snapUpdateFriendStatus(
          game?.gameLead?.userId!,
          updateLeadStatus,
        )
      }
    }
    return () => {
      updateDBPlayersList.current?.()
      updateLead?.()
    }
  }, [isFocused])

  const handleReadyBtn = () => {
    game?.gameLead?.userId &&
      dbUpdateReadyStatus(game.gameLead.userId, userId!, !isReady)
    setIsReady(!isReady)
  }

  const deletePhraseOutGame = (phraseId: number) => {
    game?.gameLead?.userId && dbDeletePhrase(game.gameLead.userId, phraseId)
  }

  useEffect(() => {
    if (game?.list?.length! < 2 || game?.list?.length === undefined) {
      setGameLock(true)
      game?.gameLead?.userId &&
        dbUpdateReadyStatus(game.gameLead.userId, userId!, false)
      setIsReady(false)
    } else {
      setGameLock(false)
    }
  }, [game?.list])

  const handleFinishGame = () => {
    updateGameStatus?.('finishing')
    userId && dbUpdateGameStatus(userId, 'finishing')
    startFinishGame?.()
  }

  useEffect(() => {
    if (
      !isLead &&
      game?.playersList?.length &&
      game?.gameStatus !== 'playing' &&
      game?.finish?.username
    ) {
      Navigate.toGameResultScreen()
    }
  }, [game?.gameStatus, game?.finish])

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRText isTitle style={styles.gameNameTitle}>
        {game?.gameName}
      </WDRText>

      {isLead ? (
        <WDRCombineItem
          noPadding
          bodyElement={
            <WDRButton
              title={t('singleGame.play')}
              style={styles.playBtn}
              isDisabled={totalPlayers !== readyPlayers || gameLock || !isReady}
              onPress={handleFinishGame}
              isLoading={isGameCalcWinner}
            />
          }
          rightElement={
            <ReadyButton
              onPress={handleReadyBtn}
              isReady={isReady}
              isDisabled={gameLock || isGameCalcWinner}
            />
          }
        />
      ) : (
        <WDRCombineItem
          noPadding
          bodyElement={
            <View style={styles.leadStatusBox}>
              <WDRText style={styles.hostTitleStatus} isTitle>
                {t('teamGame.gameHost')}
              </WDRText>
              <WDRIcon
                iconName="point"
                iconColor={
                  isLeadOnline
                    ? getThemeColor('USER_STATUS_ONLINE')
                    : getThemeColor('USER_STATUS_OFFLINE')
                }
              />
            </View>
          }
          rightElement={
            <ReadyButton
              onPress={handleReadyBtn}
              isReady={isReady}
              isDisabled={gameLock || isGameCalcWinner}
            />
          }
        />
      )}

      <WDRButton
        title={t('phraseList.addPhrase')}
        onPress={Navigate.toAddPhraseIntoGameScreen}
        style={styles.addPhraseBtn}
        isDisabled={isGameCalcWinner || isReady}
      />

      <WDRList
        isBounces
        listItems={game?.list}
        listStyles={styles.listStyle}
        titleEmptyComponent={t('singleGame.emptyPhraseList')}
        renderListItem={({ item }) => (
          <GamePhraseItem
            username={item.username}
            phrase={item.phrase}
            phraseId={item.phraseId}
            onDelete={deletePhraseOutGame}
          />
        )}
      />
    </WDRContainer>
  )
}

export default TeamGameBoard
