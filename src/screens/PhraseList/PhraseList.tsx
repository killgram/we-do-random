import React, { useLayoutEffect } from 'react'
import { IPhraseListTypesProps } from './PhraseListTypes'
import getStyle from './PhraseListStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'

/**
 * @description PhraseList
 * @param {IPhraseListTypesProps} props
 * @return {JSX}
 */
const PhraseListScreen = (props: IPhraseListTypesProps) => {
  const { language, logout, navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.phrasesList'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>PhraseList</WDRText>
    </WDRContainer>
  )
}

export default PhraseListScreen
