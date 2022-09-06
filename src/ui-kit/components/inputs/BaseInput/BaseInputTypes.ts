import React from 'react'
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native'
import { RNStyleType } from '@utils'

export interface IBaseInputProps extends TextInputProps {
  containerStyle?: RNStyleType
  disabled?: boolean
  onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void
  inputStyle?: RNStyleType
  error?: string
  defaultValue?: string
  rightElement?: React.ReactNode
  children?: React.ReactChild
}
