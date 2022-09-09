import React, { useLayoutEffect } from 'react'
import { IFriendListTypesProps } from './FriendListTypes'
import getStyle from './FriendListStyles'
import { WDRButton, WDRContainer, WDRList } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import FriendListItem from '@components/FriendListItem'

/**
 * @description FriendList
 * @param {IFriendListTypesProps} props
 * @return {JSX}
 */
const FriendListScreen = (props: IFriendListTypesProps) => {
  const { navigation, deleteFriend, friendsList } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.friendList'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRButton
        title={t('friendList.addFriend')}
        onPress={Navigate.toAddFriendScreen}
        style={styles.addFriendBox}
      />

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
    </WDRContainer>
  )
}

export default FriendListScreen
