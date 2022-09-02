import React from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { sp } from '@utils'

import { IWDRIconTypes } from './WDRIconTypes'
import icoMoonConfig from './selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig)

/**
 *
 * @param { IWDRIconTypes } props
 * @constructor
 */
const WDRIcon = (props: IWDRIconTypes) => {
  const { iconName, iconColor, iconSize = 20 } = props
  return <Icon name={iconName} color={iconColor} size={sp(iconSize)} />
}

export default WDRIcon
