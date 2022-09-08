import React, { useLayoutEffect } from 'react'
import { IFriendListTypesProps } from './FriendListTypes'
import getStyle from './FriendListStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'

/**
 * @description FriendList
 * @param {IFriendListTypesProps} props
 * @return {JSX}
 */
const FriendListScreen = (props: IFriendListTypesProps) => {
  const { language, logout, navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('game.friendList'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>FriendList</WDRText>
    </WDRContainer>
  )
}

export default FriendListScreen
