import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
import { ISEContainerProps } from './WDRContainerTypes'
import { width, getThemeStatusBar } from '@utils'
import getStyle from './WDRContainerStyles'
import { WDRKeyboardShift } from '@ui-kit/components'

/**
 *
 * @description - the base container for the content
 * contains all the padding required by default
 * @param {ISEContainerProps} props
 * @constructor
 */
const WDRContainer = (props: ISEContainerProps) => {
  const {
    paddingBottom,
    paddingHorizontal = 16,
    children,
    style,
    isKeyBoardDismiss = true,
    isTransparentHeader,
  } = props
  const styles = getStyle()
  const insets = useSafeAreaInsets()
  const headerHeight = useHeaderHeight()

  return (
    <WDRKeyboardShift
      disabledKeyboardDismiss={!isKeyBoardDismiss}
      style={StyleSheet.flatten([
        styles.container,
        {
          paddingHorizontal: width(paddingHorizontal),
        },
        style,
      ])}
    >
      <StatusBar barStyle={getThemeStatusBar()} />
      <View
        style={StyleSheet.flatten([
          isTransparentHeader
            ? { paddingTop: headerHeight }
            : { height: insets.top },
        ])}
      />
      {children}
      {paddingBottom && <View style={{ height: insets.bottom }} />}
    </WDRKeyboardShift>
  )
}

export default WDRContainer
