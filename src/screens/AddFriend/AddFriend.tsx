import React, { useLayoutEffect } from 'react'
import { IAddFriendTypesProps } from './AddFriendTypes'
import getStyle from './AddFriendStyles'
import { WDRButton, WDRContainer, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'

/**
 * @description AddFriend
 * @param {IAddFriendTypesProps} props
 * @return {JSX}
 */
const AddFriendScreen = (props: IAddFriendTypesProps) => {
  const { addFriend, navigation } = props
  const styles = getStyle()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('friendList.addFriend'),
    })
  }, [])

  const handleAddFriend = (id) => {
    addFriend?.(id)
  }

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>AddFriendScreen</WDRText>
      <WDRButton
        title="1834446796843591"
        onPress={() => handleAddFriend('1834446796843591')}
      />
      <WDRButton
        title="2626477374278932"
        onPress={() => handleAddFriend('2626477374278932')}
      />
      <WDRButton
        title="3556229277161935"
        onPress={() => handleAddFriend('3556229277161935')}
      />
      <WDRButton
        title="6116494554766339"
        onPress={() => handleAddFriend('6116494554766339')}
      />
    </WDRContainer>
  )
}

export default AddFriendScreen
