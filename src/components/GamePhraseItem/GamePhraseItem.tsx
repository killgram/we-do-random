import React from 'react'
import { IGamePhraseItemProps } from './GamePhraseItemTypes'
import getStyle from './GamePhraseItemStyles'
import { TouchableOpacity, View } from 'react-native'
import { WDRCombineItem, WDRIcon, WDRText } from '@ui-kit/components'

const GamePhraseItem = (props: IGamePhraseItemProps) => {
  const { username, onDelete, phrase, phraseId, isUser } = props
  const styles = getStyle()

  const handleDeletePhrase = () => {
    onDelete?.(phraseId)
  }

  const generateHideString = (phrase) => {
    return '*'.repeat(phrase.length)
  }

  return (
    <View style={styles.container}>
      <WDRCombineItem
        bodyElement={
          username ? (
            <>
              <WDRText style={styles.text}>{username}</WDRText>
              <WDRText style={styles.text} isTitle>
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
          isUser && (
            <TouchableOpacity activeOpacity={0.5} onPress={handleDeletePhrase}>
              <WDRIcon iconName="delete" />
            </TouchableOpacity>
          )
        }
      />
    </View>
  )
}

export default GamePhraseItem
