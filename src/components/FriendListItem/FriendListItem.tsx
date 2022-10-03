import React from 'react'
import { IFriendListItemProps } from './FriendListItemTypes'
import getStyle from './FriendListItemStyles'
import { TouchableOpacity, View } from 'react-native'
import { WDRCombineItem, WDRIcon, WDRText } from '@ui-kit/components'
import { getThemeColor } from '@utils'

const FriendListItem = (props: IFriendListItemProps) => {
  const { username, onPress, userId, isOnline } = props
  const styles = getStyle()

  const handleDeleteFriend = () => {
    onPress?.(userId)
  }

  return (
    <View style={styles.container}>
      <WDRCombineItem
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
          <TouchableOpacity activeOpacity={0.5} onPress={handleDeleteFriend}>
            <WDRIcon
              iconName="delete"
              iconColor={getThemeColor('CHOSEN_ICON')}
            />
          </TouchableOpacity>
        }
      />
    </View>
  )
}

export default FriendListItem
