import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import getStyle from './InputStyles'
import { IInputProps } from './InputTypes'
import { getThemeColor } from '@utils'

/**
 * @description foundational component
 * @param {IInputProps} props
 * @constructor
 */
const Input = (props: IInputProps) => {
  const { style, disabled, ...other } = props
  const styles = getStyle()

  return (
    <TextInput
      style={StyleSheet.flatten([styles.input, style])}
      placeholderTextColor={
        disabled
          ? getThemeColor('DISABLE_INPUT')
          : getThemeColor('PLACEHOLDER_INPUT')
      }
      editable={!disabled}
      autoCorrect={false}
      autoCapitalize="none"
      {...other}
    />
  )
}

export default Input
