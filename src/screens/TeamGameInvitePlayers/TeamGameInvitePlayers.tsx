import React, { useLayoutEffect } from 'react'
import getStyle from './TeamGameInvitePlayersStyles'
import { WDRButton, WDRContainer, WDRList, WDRText } from '@ui-kit/components'
import { ITeamGameInvitePlayersScreenProps } from './TeamGameInvitePlayersTypes'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import { HeaderBackButton } from '@react-navigation/elements'
import { getThemeColor } from '@utils'
import { dbUpdatePlayStatus, dbCloseGame } from '@services'

/**
 * @description TeamGameInvitePlayers
 * @param {ITeamGameInvitePlayersScreenProps} props
 * @return {JSX}
 */
const TeamGameInvitePlayers = (props: ITeamGameInvitePlayersScreenProps) => {
  const { navigation, cleanGame, userId, game, kickOffPlayer } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const exitGame = () => {
    userId && dbUpdatePlayStatus(userId, false)
    userId && dbCloseGame(userId)
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
      headerTitle: t('createGame.invitePlayers'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRButton
        title={t('teamGame.addPlayer')}
        onPress={Navigate.toAddPlayersIntoGame}
      />

      <WDRList
        isBounces
        listItems={game?.playersList}
        listStyles={styles.listStyle}
        titleEmptyComponent={t('teamGame.emptyPlayersList')}
        renderListItem={({ item }) => <WDRText>{item.username}</WDRText>}
      />
    </WDRContainer>
  )
}

export default TeamGameInvitePlayers
