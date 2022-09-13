import React, { useLayoutEffect, useState } from 'react'
import getStyle from './SingleGameBoardStyles'
import {
  WDRButton,
  WDRCombineItem,
  WDRContainer,
  WDRList,
  WDRText,
} from '@ui-kit/components'
import { ISingleGameBoardScreenProps } from './SingleGameBoardTypes'
import { useTranslation } from 'react-i18next'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import { Navigate } from '@navigators'
import ReadyButton from '@components/ReadyButton'
import GamePhraseItem from '@components/GamePhraseItem'

/**
 * @description SingleGameBoard
 * @param {ISingleGameBoardScreenProps} props
 * @return {JSX}
 */
const SingleGameBoard = (props: ISingleGameBoardScreenProps) => {
  const { navigation, cleanGame, game, phraseList, deletePhraseOutGame } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const [isReady, setIsReady] = useState(false)

  const exitGame = () => {
    cleanGame?.()
    Navigate.toAppStack()
  }

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={exitGame}
          tintColor={getThemeColor('MAIN_TEXT')}
        />
      ),
      headerTitle: t('game.singleGame'),
    })
  }, [])

  const handleReadyBtn = () => {
    setIsReady(!isReady)
  }

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRText isTitle style={styles.gameNameTitle}>
        {game?.gameName}
      </WDRText>

      <WDRCombineItem
        noPadding
        bodyElement={
          <WDRButton
            title={t('singleGame.play')}
            style={styles.playBtn}
            isDisabled={
              phraseList?.length! < 2 ||
              phraseList?.length === undefined ||
              !isReady
            }
          />
        }
        rightElement={
          <ReadyButton
            onPress={handleReadyBtn}
            isReady={isReady}
            isDisabled={
              phraseList?.length! < 2 || phraseList?.length === undefined
            }
          />
        }
      />

      <WDRButton
        title={t('phraseList.addPhrase')}
        onPress={Navigate.toAddPhraseIntoGameScreen}
        style={styles.addPhraseBtn}
      />
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
          />
        )}
      />
    </WDRContainer>
  )
}

export default SingleGameBoard
