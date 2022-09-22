import React from 'react'
import { INewVersionModalProps } from './NewVersionModalTypes'
import getStyle from './NewVersionModalStyles'
import { WDRButton, WDRCenterModal, WDRIcon, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { getThemeColor } from '@utils'

const NewVersionModal = (props: INewVersionModalProps) => {
  const { isVisible = false, closeModal } = props
  const styles = getStyle()
  const { t } = useTranslation()

  return (
    <WDRCenterModal isVisible={isVisible}>
      <WDRIcon
        iconName="load"
        iconSize={120}
        iconColor={getThemeColor('CHOSEN_ICON')}
      />
      <WDRText style={styles.title} isTitle size={20}>
        {t('newVersion.title')}
      </WDRText>

      <WDRButton
        style={styles.btn}
        title={t('newVersion.button')}
        onPress={closeModal}
      />
    </WDRCenterModal>
  )
}

export default NewVersionModal