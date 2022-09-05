import { Text, StyleSheet } from 'react-native'
import React from 'react'
import getStyle from './WDRTextStyles'
import { IWDRTextProps } from './WDRTextTypes'
import { sp } from '@utils'

/**
 *
 * @param {IWDRTextProps} props
 * @constructor
 */
const WDRText = (props: IWDRTextProps) => {
  const {
    children,
    isTitle,
    isHeading,
    isSecondary,
    isError,
    isLink,
    style,
    size,
    color,
    ...other
  } = props
  const styles = getStyle()

  return (
    <Text
      style={StyleSheet.flatten([
        styles.font,
        isHeading && styles.heading,
        isTitle && styles.title,
        isSecondary && styles.secondary,
        isError && styles.error,
        isLink && styles.link,
        size ? { fontSize: sp(size) } : {},
        color ? { color: color } : {},
        style,
      ])}
      {...other}
    >
      {children}
    </Text>
  )
}

export default WDRText
