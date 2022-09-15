import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { IAddFriendIntoGameTypesProps } from './AddFriendIntoGameTypes'
import getStyle from './AddFriendIntoGameStyles'
import { WDRContainer, WDRList } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { useIsFocused } from '@react-navigation/native'
import { snapUpdateFriendStatus } from '@services'
import AddFriendIntoGameItem from '@components/AddFriendIntoGameItem'
import { Navigate } from '@navigators'

/**
 * @description AddFriendIntoGame
 * @param {IAddFriendIntoGameTypesProps} props
 * @return {JSX}
 */
const AddFriendIntoGameScreen = (props: IAddFriendIntoGameTypesProps) => {
  const { navigation, friendsList, updateFriendStatus, route, game } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const isFocused = useIsFocused()
  let updateFriendsStatus = useRef<any>([])

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.friendList'),
    })
  }, [])

  useEffect(() => {
    if (isFocused) {
      friendsList?.forEach((item) => {
        updateFriendsStatus.current?.push(
          snapUpdateFriendStatus(item.userId, updateFriendStatus!),
        )
      })
    }
    return () => {
      updateFriendsStatus.current?.forEach((item) => {
        item?.()
      })
    }
  }, [isFocused])

  const handleChooseFriend = (id: string) => {
    route?.params?.goBackScreen?.(id)
    Navigate.goBack()
  }

  const calcChosenAbility = (item) => {
    let coincidenceCount = 0

    game?.playersList?.forEach((elem) => {
      if (elem.userId === item.userId) {
        coincidenceCount++
      }
    })
    return coincidenceCount === 0
  }

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRList
        isBounces
        listItems={friendsList}
        listStyles={styles.listStyle}
        titleEmptyComponent={t('friendList.emptyList')}
        renderListItem={({ item }) => (
          <AddFriendIntoGameItem
            username={item.username}
            userId={item.userId}
            isOnline={item.isOnline}
            onPress={handleChooseFriend}
            canChoose={calcChosenAbility(item)}
          />
        )}
      />
    </WDRContainer>
  )
}

export default AddFriendIntoGameScreen
