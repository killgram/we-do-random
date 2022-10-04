import React, { useEffect, useLayoutEffect, useState } from 'react'
import getStyle from './SingleGameBoardStyles'
import { WDRButton, WDRContainer, WDRList, WDRText } from '@ui-kit/components'
import { ISingleGameBoardScreenProps } from './SingleGameBoardTypes'
import { useTranslation } from 'react-i18next'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import { Navigate } from '@navigators'
import GamePhraseItem from '@components/GamePhraseItem'
import { dbUpdatePlayStatus } from '@services'
import { StyleSheet, TouchableOpacity } from 'react-native'

/**
 * @description SingleGameBoard
 * @param {ISingleGameBoardScreenProps} props
 * @return {JSX}
 */
const SingleGameBoard = (props: ISingleGameBoardScreenProps) => {
  const {
    navigation,
    cleanGame,
    game,
    phraseList,
    deletePhraseOutGame,
    userId,
    startFinishGame,
  } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const [isReady, setIsReady] = useState(false)
  const [gameLock, setGameLock] = useState(true)
  const isGameCalcWinner = game?.finish?.isLoading

  /**
   * @description handle exit game
   */
  const exitGame = () => {
    userId && dbUpdatePlayStatus(userId, false)
    cleanGame?.()
    Navigate.toAppStack()
  }

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={exitGame}
          tintColor={getThemeColor('SECONDARY_TEXT')}
        />
      ),
      headerTitle: t('game.singleGame'),
    })
  }, [])

  /**
   * @description handle ready status btn
   */
  const handleReadyBtn = () => {
    setIsReady(!isReady)
  }

  useEffect(() => {
    if (phraseList?.length! < 2 || phraseList?.length === undefined) {
      setGameLock(true)
      setIsReady(false)
    } else {
      setGameLock(false)
    }
  }, [phraseList])

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRText isSecondary style={styles.gameNameTitle}>
        {game?.gameName}
      </WDRText>

      <WDRButton
        title={t('phraseList.addPhrase')}
        onPress={Navigate.toAddPhraseIntoGameScreen}
        style={styles.addPhraseBtn}
        isDisabled={isGameCalcWinner}
        isSecondary
      />

      <WDRList
        isBounces
        listItems={phraseList}
        titleEmptyComponent={t('singleGame.emptyPhraseList')}
        renderListItem={({ item }) => (
          <GamePhraseItem
            phrase={item.phrase}
            phraseId={item.phraseId}
            onDelete={deletePhraseOutGame!}
            isUser={true}
          />
        )}
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

      <WDRButton
        title={t('singleGame.play')}
        style={styles.playBtn}
        isDisabled={gameLock || !isReady}
        onPress={startFinishGame}
        isLoading={isGameCalcWinner}
        isSecondary
      />
    </WDRContainer>
  )
}

export default SingleGameBoard
