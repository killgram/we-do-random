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
        title={t('singleGame.play')}
        style={styles.playBtn}
        isDisabled={gameLock || !isReady}
        onPress={startFinishGame}
        isLoading={isGameCalcWinner}
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
        <WDRText
          style={StyleSheet.flatten([
            isReady ? styles.isReadyTitle : styles.isNoReadyTitle,
          ])}
        >
          {isReady ? t('singleGame.ready') : t('singleGame.noReady')}
        </WDRText>
      </TouchableOpacity>

      <WDRList
        isBounces
        listItems={phraseList}
        listStyles={styles.listStyle}
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

      <WDRButton
        title={t('phraseList.addPhrase')}
        onPress={Navigate.toAddPhraseIntoGameScreen}
        style={styles.addPhraseBtn}
        isDisabled={isGameCalcWinner}
        isSecondary
      />
    </WDRContainer>
  )
}

export default SingleGameBoard
