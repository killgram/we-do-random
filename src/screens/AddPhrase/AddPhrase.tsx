import React, { useLayoutEffect, useState } from 'react'
import getStyle from './AddPhraseStyles'
import {
  WDRButton,
  WDRCombineItem,
  WDRContainer,
  WDRInput,
  WDRText,
} from '@ui-kit/components'
import { IAddPhraseScreenProps } from './AddPhraseTypes'
import { useTranslation } from 'react-i18next'
import { getDataToBuffer, addPhrase } from '@utils'
import { Navigate } from '@navigators'

/**
 * @description AddPhraseScreen
 * @param {IAddPhraseScreenProps} props
 * @return {JSX}
 */
const AddPhraseScreen = (props: IAddPhraseScreenProps) => {
  const { navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('phraseList.addPhrase'),
    })
  }, [])

  const handleAddPhrase = () => {
    addPhrase(inputValue).then((_) => {
      Navigate.goBack()
    })
  }

  const handleInputChange = (e: string) => {
    setInputValue(e)
  }

  const insertBuffer = () => {
    getDataToBuffer().then((r) => {
      setInputValue(r)
    })
  }

  return (
    <WDRContainer isTransparentHeader>
      <WDRCombineItem
        bodyElement={
          <WDRText isSecondary>{t('phraseList.enterPhrase')}</WDRText>
        }
        rightElement={
          <WDRButton
            title={t('phraseList.insert').toLowerCase()}
            isTransparent
            onPress={insertBuffer}
          />
        }
        noPadding
        style={styles.descTopContainer}
      />

      <WDRInput
        value={inputValue}
        onChangeText={handleInputChange}
        inputContainerStyle={styles.inputBox}
      />

      <WDRButton
        title={t('phraseList.add')}
        isDisabled={inputValue.length === 0}
        onPress={handleAddPhrase}
        isSecondary
      />
    </WDRContainer>
  )
}

export default AddPhraseScreen
