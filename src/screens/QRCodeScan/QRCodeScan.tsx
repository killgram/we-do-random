import React, { useState } from 'react'
import { BarcodeMaskStyle } from '@ui-kit/styles'
import { IQRCodeScanTypes } from './QRCodeScanTypes'
import { WDRText, WDRButton } from '@ui-kit/components'
import getStyle from './QRCodeScanStyles'
import { useTranslation } from 'react-i18next'
import BarcodeMask from 'react-native-barcode-mask'
import { RNCamera } from 'react-native-camera'
import { Navigate } from '@navigators'

/**
 * @description qr code scan screen
 * @param {IQRCodeScanTypes} props
 * @constructor
 */
const QRCodeScanScreen = (props: IQRCodeScanTypes) => {
  const { route } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const [isBarcodeRead, setIsBarcodeRead] = useState(false)

  /**
   * @description used when qr code read
   * @param e
   */
  const onBarCodeRead = (e) => {
    if (!isBarcodeRead) {
      setIsBarcodeRead(true)
      route?.params?.goBackScreen?.(e.data)
      Navigate.goBack()
    }
  }

  return (
    <>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: t('qrScreen.cameraPermission'),
          message: t('qrScreen.weNeedPermissionUseCameraScanQrCode'),
          buttonPositive: t('qrScreen.good'),
          buttonNegative: t('qrScreen.cancel'),
        }}
        detectedImageInEvent={false}
        captureAudio={false}
        onBarCodeRead={onBarCodeRead}
        barCodeTypes={isBarcodeRead ? [] : [RNCamera.Constants.BarCodeType.qr]}
      >
        <BarcodeMask {...BarcodeMaskStyle} />
        <WDRText style={styles.cameraText} isTitle>
          {t('qrScreen.placeTheQRCodeInTheMiddle')}
        </WDRText>
        <WDRButton
          title={t('qrScreen.close')}
          onPress={() => Navigate.goBack()}
        />
      </RNCamera>
      <WDRText style={styles.cameraText} isTitle>
        {t('qrScreen.scanQrCodeYouNeedPermissionUseCamera')}
      </WDRText>
      <WDRButton
        title={t('qrScreen.close')}
        onPress={() => Navigate.goBack()}
        style={styles.cameraButton}
      />
    </>
  )
}

export default QRCodeScanScreen
