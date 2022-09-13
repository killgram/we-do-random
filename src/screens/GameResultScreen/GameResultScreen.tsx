import React, { useLayoutEffect } from 'react'
import getStyle from './GameResultScreenStyles'
import { WDRButton, WDRContainer, WDRIcon, WDRText } from '@ui-kit/components'
import { IGameResultScreenScreenProps } from './GameResultScreenTypes'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { getThemeColor } from '@utils'
import { dbUpdatePlayStatus } from '@services'
import { Navigate } from '@navigators'

/**
 * @description GameResultScreen
 * @param {IGameResultScreenScreenProps} props
 * @return {JSX}
 */
const GameResultScreen = (props: IGameResultScreenScreenProps) => {
  const { navigation, cleanGame, game, userId } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('finishGame.results'),
    })
  }, [])

  const exitGame = () => {
    userId && dbUpdatePlayStatus(userId, false)
    cleanGame?.()
    Navigate.toAppStack()
  }

  return (
    <WDRContainer isTransparentHeader>
      <View style={styles.winnerIcon}>
        <WDRIcon
          iconName="winner"
          iconSize={150}
          iconColor={getThemeColor('WINNER_ICON')}
        />
      </View>

      <WDRText size={20} isTitle style={styles.title}>
        {game?.gameName}
      </WDRText>
      <WDRText size={20} isTitle style={styles.winnerName}>
        {game?.finish?.phrase}
      </WDRText>

      <WDRText size={20} isTitle style={styles.title}>
        {t('finishGame.winner')}
      </WDRText>
      <WDRText size={24} isTitle style={styles.winnerName}>
        {game?.finish?.username}
      </WDRText>

      <WDRText size={20} isTitle style={styles.title}>
        {t('finishGame.chance')}
      </WDRText>
      <WDRText size={20} style={styles.winnerChance}>
        {`${Number(game?.finish?.chance)} %`}
      </WDRText>

      <WDRButton
        style={styles.finishBtn}
        title={t('finishGame.finishGame')}
        onPress={exitGame}
      />
    </WDRContainer>
  )
}

export default GameResultScreen
