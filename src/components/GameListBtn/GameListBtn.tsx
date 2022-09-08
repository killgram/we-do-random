import React from 'react'
import { IGameListBtnProps } from './GameListBtnTypes'
import getStyle from './GameListBtnStyles'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { WDRText } from '@ui-kit/components'

const GameListBtn = (props: IGameListBtnProps) => {
  const { title, onPress, style } = props
  const styles = getStyle()

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <WDRText size={20} style={styles.text} isTitle>
        {title}
      </WDRText>
    </TouchableOpacity>
  )
}

export default GameListBtn
