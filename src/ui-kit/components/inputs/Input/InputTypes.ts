import { TextInputProps } from 'react-native'
import { RNStyleType } from '@utils'
import React from 'react'

export interface IInputProps extends TextInputProps {
  style?: RNStyleType
  disabled?: boolean
  children?: React.ReactChild
}
