import React from 'react'
import { WDRModal } from '@ui-kit/components'
import { StyleSheet, View } from 'react-native'
import { IWDRCenterModalTypes } from './WDRCenterModalTypes'
import getStyle from './WDRCenterModalStyles'

/**
 *
 * @param {IWDRCenterModalTypes} props
 * @return {JSX}
 */
const WDRCenterModal = (props: IWDRCenterModalTypes) => {
  const { closeHandler, children, modalStyles, isVisible = false } = props

  const styles = getStyle()

  return (
    <WDRModal
      isVisible={isVisible}
      closeHandler={closeHandler}
      animationType="fade"
      containerStyles={styles.modalContainer}
    >
      <View style={StyleSheet.flatten([styles.modal, modalStyles])}>
        {children}
      </View>
    </WDRModal>
  )
}

export default WDRCenterModal
