import React from 'react'
import { RNStyleType } from '@utils'
import { ViewProps } from 'react-native'

export interface IWDRKeyboardShiftProps extends ViewProps {
  children?: React.ReactNode
  disabledKeyboardDismiss?: boolean
  style?: RNStyleType
  enabled?: boolean
}
