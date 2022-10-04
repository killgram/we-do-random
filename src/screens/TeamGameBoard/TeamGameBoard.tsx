import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import getStyle from './TeamGameBoardStyles'
import {
  WDRButton,
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
import GamePhraseItem from '@components/GamePhraseItem'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

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
  const updateDBPlayersList = useRef<any>([])
  let updateLead

  const isLead = game?.gameLead?.userId === userId

  const [isReady, setIsReady] = useState(false)
  const [gameLock, setGameLock] = useState(true)
  const [isLeadOnline, setIsLeadOnline] = useState(false)
  const isGameCalcWinner = game?.finish?.isLoading

  /**
   * @description exit game lead func
   */
  const exitGameLeader = () => {
    userId && dbUpdatePlayStatus(userId, false)
    userId && dbCloseGame(userId)
    cleanGame?.()
    Navigate.toAppStack()
  }

  /**
   * @description exit game user func
   */
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

  /**
   * @description different exit game func
   */
  const exitGame = () => {
    isLead ? exitGameLeader() : exitGameUser()
  }

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={exitGame}
          tintColor={getThemeColor('SECONDARY_TEXT')}
        />
      ),
      headerTitle: t('game.teamGame'),
      headerRight: () => (
        <WDRText
          isSecondary
          style={styles.headerRight}
        >{`${readyPlayers}/${totalPlayers}`}</WDRText>
      ),
    })
  }, [game])

  /**
   * @description update invite status func
   * @param data
   */
  const updateInviteStatusData = (data) => {
    updateGameView?.(data)
  }

  /**
   * @description update lead status func
   * @param {string} id
   * @param {boolean} status
   */
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

  /**
   * @description handle ready btn
   */
  const handleReadyBtn = () => {
    game?.gameLead?.userId &&
      dbUpdateReadyStatus(game.gameLead.userId, userId!, !isReady)
    setIsReady(!isReady)
  }

  /**
   * @description delete phrase from game
   * @param {number} phraseId
   */
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

  /**
   * @description handle btn to finish game
   */
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
      <WDRText isSecondary style={styles.gameNameTitle}>
        {game?.gameName}
      </WDRText>

      <WDRButton
        title={t('phraseList.addPhrase')}
        onPress={Navigate.toAddPhraseIntoGameScreen}
        style={styles.addPhraseBtn}
        isDisabled={isGameCalcWinner || isReady}
        isSecondary
      />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleReadyBtn}
        disabled={gameLock || isGameCalcWinner}
        style={StyleSheet.flatten([
          isReady ? styles.isReady : styles.noReady,
          (gameLock || isGameCalcWinner) && styles.readyDisabled,
        ])}
      >
        <WDRText style={styles.isReadyTitle}>{t('singleGame.ready')}</WDRText>
      </TouchableOpacity>

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
            isUser={item.userId === userId}
          />
        )}
      />

      {isLead ? (
        <WDRButton
          title={t('singleGame.play')}
          style={styles.playBtn}
          isDisabled={totalPlayers !== readyPlayers || gameLock || !isReady}
          onPress={handleFinishGame}
          isLoading={isGameCalcWinner}
          isSecondary
        />
      ) : (
        <View style={styles.leadStatusBox}>
          <WDRText style={styles.hostTitleStatus} isSecondary>
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
      )}
    </WDRContainer>
  )
}

export default TeamGameBoard
