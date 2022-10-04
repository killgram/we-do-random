import React from 'react'
import { IGamePhraseItemProps } from './GamePhraseItemTypes'
import getStyle from './GamePhraseItemStyles'
import { TouchableOpacity, View } from 'react-native'
import { WDRCombineItem, WDRIcon, WDRText } from '@ui-kit/components'
import { getThemeColor } from '@utils'

/**
 * @description game phrase item
 * @param {IGamePhraseItemProps} props
 * @constructor
 */
const GamePhraseItem = (props: IGamePhraseItemProps) => {
  const { username, onDelete, phrase, phraseId, isUser, onlyView } = props
  const styles = getStyle()

  /**
   * @description handle delete phrase func
   */
  const handleDeletePhrase = () => {
    onDelete?.(phraseId)
  }

  /**
   * @description generate hide string func
   * @param {string} phrase
   */
  const generateHideString = (phrase: string) => {
    return '*'.repeat(phrase.length)
  }

  return (
    <View style={styles.container}>
      <WDRCombineItem
        bodyElement={
          username ? (
            <>
              <WDRText style={styles.text}>{username}</WDRText>
              <WDRText
                color={getThemeColor('CHOSEN_ICON')}
                style={styles.text}
                isTitle
              >
                {isUser ? phrase : generateHideString(phrase)}
              </WDRText>
            </>
          ) : (
            <WDRText style={styles.text} isTitle>
              {phrase}
            </WDRText>
          )
        }
        rightElement={
          isUser &&
          !onlyView && (
            <TouchableOpacity activeOpacity={0.5} onPress={handleDeletePhrase}>
              <WDRIcon
                iconName="delete"
                iconColor={getThemeColor('CHOSEN_ICON')}
              />
            </TouchableOpacity>
          )
        }
      />
    </View>
  )
}

export default GamePhraseItem
