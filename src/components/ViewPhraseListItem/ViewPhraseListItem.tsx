import React from 'react'
import { IViewPhraseListItemProps } from './ViewPhraseListItemTypes'
import getStyle from './ViewPhraseListItemStyles'
import { StyleSheet, View } from 'react-native'
import { WDRText } from '@ui-kit/components'

/**
 * @description view phrase list item
 * @param {IViewPhraseListItemProps} props
 * @constructor
 */
const ViewPhraseListItem = (props: IViewPhraseListItemProps) => {
  const { username, phrase, winnerPhrase } = props
  const styles = getStyle()

  const isWinner = winnerPhrase === phrase

  return (
    <View style={styles.container}>
      <WDRText isTitle style={StyleSheet.flatten([isWinner && styles.winner])}>
        {username}
      </WDRText>
      <WDRText isSecondary>{phrase}</WDRText>
    </View>
  )
}

export default ViewPhraseListItem
