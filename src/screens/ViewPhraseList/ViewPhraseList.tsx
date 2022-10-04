import React, { useLayoutEffect } from 'react'
import getStyle from './ViewPhraseListStyles'
import { WDRContainer, WDRList } from '@ui-kit/components'
import { IViewPhraseListScreenProps } from './ViewPhraseListTypes'
import { useTranslation } from 'react-i18next'
import ViewPhraseListItem from '@components/ViewPhraseListItem'

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
          <ViewPhraseListItem
            username={item.username}
            phrase={item.phrase}
            winnerName={game?.finish?.username!}
            winnerPhrase={game?.finish?.phrase!}
          />
        )}
      />
    </WDRContainer>
  )
}

export default ViewPhraseList
