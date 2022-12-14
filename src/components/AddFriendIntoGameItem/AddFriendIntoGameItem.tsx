import React from 'react'
import { IAddFriendIntoGameItemProps } from './AddFriendIntoGameItemTypes'
import getStyle from './AddFriendIntoGameItemStyles'
import { WDRIcon, WDRText, WDRPressableCombineItem } from '@ui-kit/components'
import { getThemeColor } from '@utils'
import { StyleSheet } from 'react-native'

/**
 * @description add friend into game item
 * @param {IAddFriendIntoGameItemProps} props
 * @constructor
 */
const AddFriendIntoGameItem = (props: IAddFriendIntoGameItemProps) => {
  const { username, onPress, userId, isOnline, canChoose } = props
  const styles = getStyle()

  /**
   * @description handle chose friend
   */
  const handleChooseFriend = () => {
    onPress?.(userId)
  }

  return (
    <WDRPressableCombineItem
      leftElement={
        <WDRIcon
          iconName="point"
          iconColor={
            isOnline
              ? getThemeColor('USER_STATUS_ONLINE')
              : getThemeColor('USER_STATUS_OFFLINE')
          }
        />
      }
      bodyElement={
        <WDRText size={20} style={styles.text} isTitle numberOfLines={1}>
          {username}
        </WDRText>
      }
      rightElement={
        <WDRIcon
          iconName="check-mark"
          iconColor={getThemeColor('CHOSEN_ICON')}
        />
      }
      onPress={handleChooseFriend}
      style={StyleSheet.flatten([
        styles.container,
        !canChoose && styles.disabled,
      ])}
      disabled={!canChoose}
    />
  )
}

export default AddFriendIntoGameItem
