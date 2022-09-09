import React from 'react'

import { View } from 'react-native'
import getStyle from './ErrorToastStyles'
import { WDRText } from '@ui-kit/components'
import { IErrorToastProps } from './ErrorToastTypes'

const ErrorToast = (props: IErrorToastProps) => {
  const { text } = props
  const styles = getStyle()

  return (
    <View style={styles.container}>
      <WDRText isTitle style={styles.text}>
        {text}
      </WDRText>
    </View>
  )
}

export default ErrorToast
