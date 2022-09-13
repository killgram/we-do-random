import React, { useLayoutEffect } from 'react'
import getStyle from './GameResultScreenStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { IGameResultScreenScreenProps } from './GameResultScreenTypes'
import { useTranslation } from 'react-i18next'

/**
 * @description GameResultScreen
 * @param {IGameResultScreenScreenProps} props
 * @return {JSX}
 */
const GameResultScreen = (props: IGameResultScreenScreenProps) => {
  const { navigation, cleanGame, game } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.singleGame'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRText isTitle style={styles.gameNameTitle}>
        {game?.gameName}
      </WDRText>
    </WDRContainer>
  )
}

export default GameResultScreen
