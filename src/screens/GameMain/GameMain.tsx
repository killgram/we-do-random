import React, { useEffect } from 'react'
import { IGameMainScreenTypesProps } from './GameMainTypes'
import getStyle from './GameMainStyles'
import { Navigate } from '@navigators'
import { WDRButton, WDRContainer } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { AppState, Image, View } from 'react-native'
import { dbUpdateStatus, snapUpdateInviteStatus } from '@services'
import ruffle from '@assets/img/raffle.png'

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
      <View style={styles.listBtnBox}>
        <WDRButton
          title={t('game.singleGame')}
          onPress={() => Navigate.toCreateGameScreen('single')}
          isSecondary
          style={styles.gameBox}
        />

        <WDRButton
          title={t('game.teamGame')}
          onPress={() => Navigate.toCreateGameScreen('team')}
          style={styles.gameBox}
        />
      </View>

      <View style={styles.listBtnBox}>
        <WDRButton
          title={t('game.friendList')}
          onPress={Navigate.toFriendListScreen}
          isTransparent
          titleStyle={styles.link}
        />
        <WDRButton
          title={t('game.phrasesList')}
          onPress={Navigate.toPhraseListScreen}
          isTransparent
          titleStyle={styles.link}
        />
      </View>

      <View style={styles.ruffleImgBox}>
        <Image source={ruffle} resizeMode="contain" style={styles.ruffleImg} />
      </View>
    </WDRContainer>
  )
}

export default GameMainScreen
