import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { IFriendListTypesProps } from './FriendListTypes'
import getStyle from './FriendListStyles'
import { WDRButton, WDRContainer, WDRList } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import FriendListItem from '@components/FriendListItem'
import { useIsFocused } from '@react-navigation/native'
import { snapUpdateFriendStatus } from '@services'

/**
 * @description FriendList
 * @param {IFriendListTypesProps} props
 * @return {JSX}
 */
const FriendListScreen = (props: IFriendListTypesProps) => {
  const { navigation, deleteFriend, friendsList, updateFriendStatus } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const isFocused = useIsFocused()
  const updateFriendsStatus = useRef<any>([])

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

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRList
        isBounces
        listItems={friendsList}
        titleEmptyComponent={t('friendList.emptyList')}
        renderListItem={({ item }) => (
          <FriendListItem
            username={item.username}
            userId={item.userId}
            isOnline={item.isOnline}
            onPress={deleteFriend}
          />
        )}
      />
      <WDRButton
        title={t('friendList.addFriend')}
        onPress={Navigate.toAddFriendScreen}
        style={styles.addFriendBox}
        isSecondary
      />
    </WDRContainer>
  )
}

export default FriendListScreen
