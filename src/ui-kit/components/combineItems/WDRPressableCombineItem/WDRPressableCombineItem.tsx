import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import styles from './WDRPressableCombineItemStyles'
import { IWDRPressableCombineItemProps } from './WDRPressableCombineItemTypes'
import { WDRCombineItem } from '@ui-kit/components'

/**
 *
 * @param {IWDRPressableCombineItemProps} props
 * @description - clickable combine item component
 * @constructor
 */
const WDRPressableCombineItem = (props: IWDRPressableCombineItemProps) => {
  const { onPress, styleContainer, disabled, ...other } = props
  return (
    <Pressable
      style={({ pressed }) =>
        StyleSheet.flatten([
          pressed && styles.opacity,
          !!styleContainer && styleContainer,
        ])
      }
      disabled={disabled}
      onPress={onPress}
    >
      <WDRCombineItem {...other} />
    </Pressable>
  )
}

export default WDRPressableCombineItem
