import React from 'react'
import { IAddPhraseListItemProps } from './AddPhraseListItemTypes'
import getStyle from './AddPhraseListItemStyles'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { WDRText } from '@ui-kit/components'

const AddPhraseListItem = (props: IAddPhraseListItemProps) => {
  const { name, onPress, canChoose } = props
  const styles = getStyle()

  const handleAddPhrase = () => {
    onPress?.(name)
  }

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.container,
        !canChoose && styles.canChoose,
      ])}
      activeOpacity={0.5}
      onPress={handleAddPhrase}
      disabled={!canChoose}
    >
      <WDRText style={styles.text} isTitle>
        {name}
      </WDRText>
    </TouchableOpacity>
  )
}

export default AddPhraseListItem
