import React from 'react'

import { View } from 'react-native'
import getStyle from './SuccessCopyToastStyles'
import { WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'

/**
 * @description success copy toast
 * @constructor
 */
const SuccessCopyToast = () => {
  const styles = getStyle()
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <WDRText isTitle style={styles.text}>
        {t('toast.successCopy')}
      </WDRText>
    </View>
  )
}

export default SuccessCopyToast
