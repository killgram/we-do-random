import React, { useLayoutEffect } from 'react'
import getStyle from './ViewPhraseListStyles'
import { WDRContainer, WDRList } from '@ui-kit/components'
import { IViewPhraseListScreenProps } from './ViewPhraseListTypes'
import { useTranslation } from 'react-i18next'
import GamePhraseItem from '@components/GamePhraseItem'

/**
 * @description ViewPhraseList
 * @param {IViewPhraseListScreenProps} props
 * @return {JSX}
 */
const ViewPhraseList = (props: IViewPhraseListScreenProps) => {
  const { navigation, game } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('teamGame.viewPhraseList'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
      <WDRList
        isBounces
        listItems={game?.list}
        listStyles={styles.listStyle}
        titleEmptyComponent={t('singleGame.emptyPhraseList')}
        renderListItem={({ item }) => (
          <GamePhraseItem
            username={item.username}
            phrase={item.phrase}
            phraseId={item.phraseId}
            isUser={true}
            onlyView={true}
          />
        )}
      />
    </WDRContainer>
  )
}

export default ViewPhraseList
