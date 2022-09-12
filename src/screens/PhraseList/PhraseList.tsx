import React, { useEffect, useLayoutEffect, useState } from 'react'
import { IPhraseListTypesProps } from './PhraseListTypes'
import getStyle from './PhraseListStyles'
import { WDRButton, WDRContainer, WDRList } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { getThemeColor, deletePhrase, clearPhrase, getPhraseData } from '@utils'
import { ActivityIndicator, View } from 'react-native'
import { Navigate } from '@navigators'
import { useIsFocused } from '@react-navigation/native'
import PhraseListItem from '@components/PhraseListItem'

/**
 * @description PhraseList
 * @param {IPhraseListTypesProps} props
 * @return {JSX}
 */
const PhraseListScreen = (props: IPhraseListTypesProps) => {
  const { navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const isFocused = useIsFocused()

  const [isScreenLoad, setIsScreenLoad] = useState(true)
  const [data, setData] = useState<Array<{ name: string; id: number }>>([])

  /**
   * @description initialize phraseList
   */
  useEffect(() => {
    if (isFocused) {
      getPhraseData(setData).then((_) => {
        setIsScreenLoad(false)
      })
    }
  }, [isFocused])

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.phrasesList'),
    })
  }, [])

  const handleDeletePhrase = async (id: number) => {
    await deletePhrase(id, data, setData)
  }

  const handleDeleteAllPhrase = async () => {
    await clearPhrase(setData)
  }

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRButton
        title={t('phraseList.addPhrase')}
        onPress={Navigate.toAddPhrase}
      />

      {data.length !== 0 && (
        <WDRButton
          title={t('phraseList.clear')}
          onPress={handleDeleteAllPhrase}
          style={styles.clearPhraseBox}
        />
      )}

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
            <PhraseListItem
              name={item.name}
              id={item.id}
              onDelete={handleDeletePhrase}
            />
          )}
        />
      )}
    </WDRContainer>
  )
}

export default PhraseListScreen
