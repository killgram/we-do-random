import React from 'react'
import { ITeamGameInviteListProps } from './TeamGameInviteListTypes'
import getStyle from './TeamGameInviteListStyles'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { WDRCombineItem, WDRIcon, WDRText } from '@ui-kit/components'
import { getThemeColor } from '@utils'

/**
 * @description team game invite list
 * @param {ITeamGameInviteListProps} props
 * @constructor
 */
const TeamGameInviteList = (props: ITeamGameInviteListProps) => {
  const { username, onPress, userId, leadId, isLead, isAccepted } = props
  const styles = getStyle()

  /**
   * @description handle delete friend
   */
  const handleDeleteFriend = () => {
    onPress?.(userId)
  }

  const isLeaderId = userId === leadId

  /**
   * @description render body func
   */
  const renderBody = () => {
    let text = (
      <WDRText size={20} style={styles.text} isTitle numberOfLines={1}>
        {username}
      </WDRText>
    )

    if (isLeaderId) {
      text = (
        <View style={styles.leadBox}>
          <WDRIcon iconName="leader" iconColor={getThemeColor('WINNER_ICON')} />
          <WDRText size={20} style={styles.text} isTitle numberOfLines={1}>
            {username}
          </WDRText>
        </View>
      )
    }

    if (!isAccepted) {
      text = (
        <View style={styles.noAccepted}>
          <ActivityIndicator
            size="small"
            style={styles.indicator}
            color={getThemeColor('ACTIVITY_INDICATOR')}
          />
          <WDRText size={20} style={styles.text} isTitle numberOfLines={1}>
            {username}
          </WDRText>
        </View>
      )
    }

    return text
  }

  return (
    <View style={styles.container}>
      <WDRCombineItem
        bodyElement={renderBody()}
        rightElement={
          isLead &&
          !isLeaderId && (
            <TouchableOpacity activeOpacity={0.5} onPress={handleDeleteFriend}>
              <WDRIcon
                iconName="delete"
                iconColor={getThemeColor('MAIN_TEXT')}
              />
            </TouchableOpacity>
          )
        }
      />
    </View>
  )
}

export default TeamGameInviteList
