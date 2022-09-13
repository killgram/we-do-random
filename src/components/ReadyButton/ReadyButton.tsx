import React from 'react'
import { IReadyButtonProps } from './ReadyButtonTypes'
import getStyle from './ReadyButtonStyles'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { WDRIcon } from '@ui-kit/components'
import { getThemeColor } from '@utils'

const ReadyButton = (props: IReadyButtonProps) => {
  const { onPress, isReady, isDisabled } = props
  const styles = getStyle()

  const renderIcon = () => {
    return isReady ? (
      <WDRIcon
        iconName="check-mark"
        iconSize={24}
        iconColor={getThemeColor('READY')}
      />
    ) : (
      <WDRIcon
        iconName="close"
        iconSize={24}
        iconColor={getThemeColor('NOT_READY')}
      />
    )
  }

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.container,
        isReady ? styles.ready : styles.noReady,
        isDisabled && styles.disabled,
      ])}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
    >
      {renderIcon()}
    </TouchableOpacity>
  )
}

export default ReadyButton
