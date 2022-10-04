import React, { useEffect, useLayoutEffect } from 'react'
import getStyle from './GameResultScreenStyles'
import { WDRButton, WDRContainer, WDRText } from '@ui-kit/components'
import { IGameResultScreenScreenProps } from './GameResultScreenTypes'
import { useTranslation } from 'react-i18next'
import { Image, View } from 'react-native'
import { playSound, SoundTypes } from '@utils'
import { dbCloseGame, dbUpdatePlayStatus } from '@services'
import { Navigate } from '@navigators'
import winner from '@assets/img/winner.png'

/**
 * @description GameResultScreen
 * @param {IGameResultScreenScreenProps} props
 * @return {JSX}
 */
const GameResultScreen = (props: IGameResultScreenScreenProps) => {
  const { navigation, cleanGame, game, userId, kickOffPlayer, username } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const isSingle = game?.gameType

  const isLead = game?.gameLead?.userId === userId

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('finishGame.results'),
    })
  }, [])

  /**
   * @description lead exit game func
   */
  const exitGameLeader = () => {
    userId && dbUpdatePlayStatus(userId, false)
    userId && dbCloseGame(userId)
    cleanGame?.()
    Navigate.toAppStack()
  }

  /**
   * @description user exit game func
   */
  const exitGameUser = () => {
    userId && dbUpdatePlayStatus(userId, false)
    cleanGame?.()
    userId && kickOffPlayer?.(game?.gameLead?.userId!, userId)
    Navigate.toAppStack()
  }

  /**
   * @description exit game func
   */
  const exitGame = () => {
    isLead ? exitGameLeader() : exitGameUser()
  }

  useEffect(() => {
    if (isSingle !== 'single') {
      if (game?.finish?.username === username) {
        playSound(SoundTypes.WIN_GAME)
      } else {
        playSound(SoundTypes.LOSE_GAME)
      }
    }
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <View style={styles.winnerIcon}>
        <Image source={winner} resizeMode="contain" style={styles.winnerImg} />
      </View>

      <WDRText size={20} isSecondary style={styles.title}>
        {game?.gameName}
      </WDRText>

      <View style={styles.winnerBox}>
        <WDRText size={20} isTitle style={styles.winnerName}>
          {game?.finish?.phrase}
        </WDRText>
      </View>

      {isSingle !== 'single' && (
        <View style={styles.winnerNameContainer}>
          <WDRText size={20} isSecondary style={styles.winnerTitle}>
            {`${t('finishGame.winner')}: `}
          </WDRText>
          <WDRText size={20} isTitle style={styles.winnerNameC}>
            {game?.finish?.username}
          </WDRText>
        </View>
      )}

      <View style={styles.chanceBox}>
        <WDRText isSecondary>{t('finishGame.chance')}</WDRText>
        <WDRText isSecondary>{`: ${Number(game?.finish?.chance)} %`}</WDRText>
      </View>

      {isSingle !== 'single' && (
        <WDRButton
          style={styles.viewPhraseBtn}
          title={t('teamGame.viewPhraseList')}
          onPress={Navigate.toViewPhraseList}
          isTransparent
          titleStyle={styles.viewPhraseBtnTitle}
        />
      )}

      <View style={styles.finishBtn}>
        <WDRButton
          isSecondary
          title={t('finishGame.finishGame')}
          onPress={exitGame}
        />
      </View>
    </WDRContainer>
  )
}

export default GameResultScreen
