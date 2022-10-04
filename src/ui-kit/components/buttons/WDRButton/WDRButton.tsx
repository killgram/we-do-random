import React from 'react'
import { Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import { WDRText } from '@ui-kit/components'
import getStyle from './WDRButtonStyles'
import { IWDRButtonProps } from './WDRButtonTypes'
import { getThemeColor } from '@utils'

/**
 *
 * @param {IWDRButtonProps} props
 * @constructor
 */
const WDRButton = (props: IWDRButtonProps) => {
  const {
    title,
    style,
    isDisabled,
    isSecondary,
    isLoading,
    loaderStyle,
    titleStyle,
    isTransparent,
    ...other
  } = props
  const styles = getStyle()

  return isLoading ? (
    <ActivityIndicator
      color={getThemeColor('ACTIVITY_INDICATOR')}
      style={StyleSheet.flatten([
        style,
        styles.container,
        styles.loader,
        loaderStyle,
      ])}
    />
  ) : (
    <Pressable
      style={({ pressed }) =>
        StyleSheet.flatten([
          isSecondary
            ? pressed
              ? styles.pressedSecondary
              : styles.staticSecondary
            : pressed
            ? styles.pressed
            : styles.static,
          styles.container,
          style,
          isTransparent && styles.transparent,
          (isDisabled || (pressed && isTransparent)) && styles.opacity,
        ])
      }
      disabled={isDisabled}
      {...other}
    >
      <WDRText
        isSecondary
        isLink={isTransparent}
        style={StyleSheet.flatten([
          isSecondary && styles.textSecondary,
          isTransparent && styles.textTransparent,
          titleStyle,
        ])}
      >
        {title}
      </WDRText>
    </Pressable>
  )
}

export default WDRButton
