import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { IQRCodeProps } from './QRCodeViewTypes'
import getStyle from './QRCodeViewStyles'
import { View } from 'react-native'
import { height } from '@utils'

const QRCodeView = (props: IQRCodeProps) => {
  const { value = ' ', size = 300 } = props
  const styles = getStyle()

  return (
    <View style={styles.container}>
      <QRCode value={value} size={height(size)} />
    </View>
  )
}

export default QRCodeView
