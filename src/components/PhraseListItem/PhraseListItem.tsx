import React from 'react'
import { IPhraseListItemProps } from './PhraseListItemTypes'
import getStyle from './PhraseListItemStyles'
import { TouchableOpacity, View } from 'react-native'
import { WDRCombineItem, WDRIcon, WDRText } from '@ui-kit/components'
import { getThemeColor } from '@utils'

/**
 * @description phrase list item
 * @param {IPhraseListItemProps} props
 * @constructor
 */
const PhraseListItem = (props: IPhraseListItemProps) => {
  const { name, id, onDelete } = props
  const styles = getStyle()

  /**
   * @description handle delete phrase func
   */
  const handleDeletePhrase = () => {
    onDelete?.(id)
  }

  return (
    <View style={styles.container}>
      <WDRCombineItem
        bodyElement={
          <WDRText style={styles.text} isTitle>
            {name}
          </WDRText>
        }
        rightElement={
          <TouchableOpacity activeOpacity={0.5} onPress={handleDeletePhrase}>
            <WDRIcon iconName="delete" iconColor={getThemeColor('MAIN_TEXT')} />
          </TouchableOpacity>
        }
      />
    </View>
  )
}

export default PhraseListItem
