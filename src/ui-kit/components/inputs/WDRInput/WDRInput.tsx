import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BaseInput } from '@ui-kit/components/inputs'
import getStyle from './WDRInputStyles'
import { IWDRInputProps } from './WDRInputTypes'
import { WDRText } from '@ui-kit/components'

/**
 * @description default WDR input
 * @param {IWDRInputProps} props
 * @constructor
 */
const WDRInput = (props: IWDRInputProps) => {
  const {
    inputContainerStyle,
    disabled,
    onEndEditing,
    inputStyle,
    error,
    defaultValue,
    errorStyle,
    labelStyle,
    label,
    SEContainerStyle,
    rightElement,
    ...other
  } = props
  const styles = getStyle()

  return (
    <View style={SEContainerStyle && SEContainerStyle}>
      {!!label && (
        <WDRText
          isSecondary
          style={StyleSheet.flatten([styles.label, labelStyle])}
        >
          {!!label && label}
        </WDRText>
      )}
      <BaseInput
        containerStyle={inputContainerStyle}
        disabled={disabled}
        onEndEditing={onEndEditing}
        inputStyle={inputStyle}
        error={error}
        defaultValue={defaultValue}
        rightElement={rightElement}
        {...other}
      />
      <WDRText isError style={StyleSheet.flatten([styles.error, errorStyle])}>
        {error ? error : ' '}
      </WDRText>
    </View>
  )
}

export default WDRInput
