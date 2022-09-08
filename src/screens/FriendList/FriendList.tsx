import React, { useLayoutEffect } from 'react'
import { IFriendListTypesProps } from './FriendListTypes'
import getStyle from './FriendListStyles'
import { WDRButton, WDRContainer, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'

/**
 * @description FriendList
 * @param {IFriendListTypesProps} props
 * @return {JSX}
 */
const FriendListScreen = (props: IFriendListTypesProps) => {
  const { language, addFriend, navigation, deleteFriend } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.friendList'),
    })
  }, [])

  const handleAddFriend = () => {
    const id = '2626477374278932'

    addFriend?.(id)
  }

  const handleDeleteFriend = () => {
    const id = '2626477374278932'

    deleteFriend?.(id)
  }

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>FriendList</WDRText>
      <WDRButton title="add friend" onPress={handleAddFriend} />
      <WDRButton title="delete friend" onPress={handleDeleteFriend} />
    </WDRContainer>
  )
}

export default FriendListScreen
