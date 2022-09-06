import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native'
import { Input } from '@ui-kit/components/inputs'
import getStyle from './BaseInputStyles'
import { IBaseInputProps } from './BaseInputTypes'
import { WDRCombineItem } from '@ui-kit/components'

/**
 * @description foundational WDR input component.
 * @param {IBaseInputProps} props
 * @constructor
 */
const BaseInput = (props: IBaseInputProps) => {
  const {
    containerStyle,
    disabled,
    onEndEditing,
    inputStyle,
    error,
    defaultValue,
    rightElement,
    ...other
  } = props
  const styles = getStyle()

  const [isFocus, setFocus] = useState(false)

  /**
   * @param {NativeSyntheticEvent<TextInputEndEditingEventData>} e
   * @return {void}
   */
  const onEndEditingLocal = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ): void => {
    setFocus(false)
    onEndEditing && onEndEditing(e)
  }

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        isFocus && styles.containerFocus,
        !!error && styles.containerError,
        containerStyle,
      ])}
    >
      <WDRCombineItem
        noPadding
        bodyElement={
          <Input
            onFocus={() => setFocus(true)}
            disabled={disabled}
            onEndEditing={onEndEditingLocal}
            value={defaultValue}
            style={StyleSheet.flatten([
              defaultValue ? styles.textBold : styles.textRegular,
              !!error && styles.textError,
              disabled && styles.textDisabled,
              inputStyle,
            ])}
            {...other}
          />
        }
        rightElement={rightElement}
      />
    </View>
  )
}

export default BaseInput
