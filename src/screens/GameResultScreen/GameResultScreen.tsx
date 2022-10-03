import React, { useEffect, useLayoutEffect } from 'react'
import getStyle from './GameResultScreenStyles'
import { WDRButton, WDRContainer, WDRIcon, WDRText } from '@ui-kit/components'
import { IGameResultScreenScreenProps } from './GameResultScreenTypes'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { getThemeColor, playSound, SoundTypes } from '@utils'
import { dbCloseGame, dbUpdatePlayStatus } from '@services'
import { Navigate } from '@navigators'

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
        <WDRIcon
          iconName="winner"
          iconSize={150}
          iconColor={getThemeColor('WINNER_ICON')}
        />
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
        <>
          <WDRText size={20} isTitle style={styles.title}>
            {t('finishGame.winner')}
          </WDRText>
          <WDRText size={24} isTitle style={styles.winnerName}>
            {game?.finish?.username}
          </WDRText>
        </>
      )}

      <View style={styles.chanceBox}>
        <WDRText isSecondary>{t('finishGame.chance')}</WDRText>
        <WDRText isSecondary>{`: ${Number(game?.finish?.chance)} %`}</WDRText>
      </View>

      {isSingle !== 'single' && (
        <WDRButton
          style={styles.finishBtn}
          title={t('teamGame.viewPhraseList')}
          onPress={Navigate.toViewPhraseList}
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
