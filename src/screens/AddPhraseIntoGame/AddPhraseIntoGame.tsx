import React, { useEffect, useLayoutEffect, useState } from 'react'
import getStyle from './AddPhraseIntoGameStyles'
import {
  WDRButton,
  WDRCombineItem,
  WDRContainer,
  WDRInput,
  WDRList,
  WDRText,
} from '@ui-kit/components'
import { IAddPhraseIntoGameScreenProps } from './AddPhraseIntoGameTypes'
import { useTranslation } from 'react-i18next'
import {
  getDataToBuffer,
  addPhrase,
  getPhraseData,
  getThemeColor,
} from '@utils'
import { Navigate } from '@navigators'
import { ActivityIndicator, View } from 'react-native'
import AddPhraseListItem from '@components/AddPhraseListItem'

/**
 * @description AddPhraseIntoGameScreen
 * @param {IAddPhraseIntoGameScreenProps} props
 * @return {JSX}
 */
const AddPhraseIntoGameScreen = (props: IAddPhraseIntoGameScreenProps) => {
  const { navigation, addPhraseIntoGame, username, userId } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState<Array<{ name: string; id: number }>>([])
  const [isScreenLoad, setIsScreenLoad] = useState(true)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('phraseList.addPhrase'),
    })
  }, [])

  useEffect(() => {
    getPhraseData(setData).then((_) => {
      setIsScreenLoad(false)
    })
  }, [])

  const handleAddPhraseIntoGame = () => {
    addPhrase(inputValue).then((_) => {
      addPhraseIntoGame?.(username!, userId!, inputValue)
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

  const choosePhraseInList = (name: string) => {
    addPhraseIntoGame?.(username!, userId!, name)
    Navigate.goBack()
  }

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRCombineItem
        bodyElement={<WDRText isTitle>{t('phraseList.enterPhrase')}</WDRText>}
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

      <WDRInput value={inputValue} onChangeText={handleInputChange} />

      <WDRButton
        title={t('phraseList.add')}
        isDisabled={inputValue.length === 0}
        onPress={handleAddPhraseIntoGame}
      />

      {isScreenLoad ? (
        <View style={styles.screenLoad}>
          <ActivityIndicator
            size="large"
            color={getThemeColor('ACTIVITY_INDICATOR')}
          />
        </View>
      ) : (
        <WDRList
          isBounces
          listItems={data}
          listStyles={styles.listStyle}
          titleEmptyComponent={t('phraseList.emptyList')}
          renderListItem={({ item }) => (
            <AddPhraseListItem name={item.name} onPress={choosePhraseInList} />
          )}
        />
      )}
    </WDRContainer>
  )
}

export default AddPhraseIntoGameScreen
