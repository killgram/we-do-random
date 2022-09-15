import React, { useEffect } from 'react'
import { IGameMainScreenTypesProps } from './GameMainTypes'
import getStyle from './GameMainStyles'
import { Navigate } from '@navigators'
import { WDRContainer } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { AppState, View } from 'react-native'
import { dbUpdateStatus, snapUpdateInviteStatus } from '@services'
import CreateGameCard from '@components/CreateGameCard'
import GameListBtn from '@components/GameListBtn'

/**
 * @description GameMainScreen
 * @param {IGameMainScreenTypesProps} props
 * @return {JSX}
 */
const GameMainScreen = (props: IGameMainScreenTypesProps) => {
  const { userId, incomingInvite } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const inviteToGame = (data) => {
    data && incomingInvite?.(data.leadName, data.leadId, data.gameName)
  }

  useEffect(() => {
    userId && dbUpdateStatus(userId, true)
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      switch (nextAppState) {
        case 'active': {
          userId && dbUpdateStatus(userId, true)
          break
        }
        default: {
          userId && dbUpdateStatus(userId, false)
          break
        }
      }
    })

    const dbUser = snapUpdateInviteStatus(userId!, inviteToGame)
    return () => {
      subscription.remove()
      dbUser?.()
    }
  }, [])

  return (
    <WDRContainer>
      <CreateGameCard
        title={t('game.singleGame')}
        style={styles.gameBox}
        onPress={() => Navigate.toCreateGameScreen('single')}
      />
      <CreateGameCard
        title={t('game.teamGame')}
        style={styles.gameBox}
        onPress={() => Navigate.toCreateGameScreen('team')}
      />

      <View style={styles.listBtnBox}>
        <GameListBtn
          title={t('game.friendList')}
          onPress={Navigate.toFriendListScreen}
        />
        <GameListBtn
          title={t('game.phrasesList')}
          onPress={Navigate.toPhraseListScreen}
        />
      </View>
    </WDRContainer>
  )
}

export default GameMainScreen
