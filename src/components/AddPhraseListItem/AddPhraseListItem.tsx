import React from 'react'
import { IAddPhraseListItemProps } from './AddPhraseListItemTypes'
import getStyle from './AddPhraseListItemStyles'
import { TouchableOpacity } from 'react-native'
import { WDRText } from '@ui-kit/components'

const AddPhraseListItem = (props: IAddPhraseListItemProps) => {
  const { name, onPress } = props
  const styles = getStyle()

  const handleAddPhrase = () => {
    onPress?.(name)
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={handleAddPhrase}
    >
      <WDRText style={styles.text} isTitle>
        {name}
      </WDRText>
    </TouchableOpacity>
  )
}

export default AddPhraseListItem
