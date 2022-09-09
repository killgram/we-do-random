import React from 'react'

import { View } from 'react-native'
import getStyle from './SuccessToastStyles'
import { WDRText } from '@ui-kit/components'
import { ISuccessToastProps } from './SuccessToastTypes'

const SuccessToast = (props: ISuccessToastProps) => {
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

export default SuccessToast
