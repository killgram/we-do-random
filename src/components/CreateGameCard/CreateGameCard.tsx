import React from 'react'
import { ICreateGameCardProps } from './CreateGameCardTypes'
import getStyle from './CreateGameCardStyles'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { WDRText } from '@ui-kit/components'

const CreateGameCard = (props: ICreateGameCardProps) => {
  const { title, onPress, style } = props
  const styles = getStyle()

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <WDRText size={24} isTitle>
        {title}
      </WDRText>
    </TouchableOpacity>
  )
}

export default CreateGameCard
