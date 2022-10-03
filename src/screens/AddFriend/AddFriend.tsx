import React, { useLayoutEffect, useState } from 'react'
import { IAddFriendTypesProps } from './AddFriendTypes'
import getStyle from './AddFriendStyles'
import {
  WDRButton,
  WDRCombineItem,
  WDRContainer,
  WDRInput,
  WDRText,
} from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { getDataToBuffer } from '@utils'
import { Navigate } from '@navigators'
import { View } from 'react-native'

/**
 * @description AddFriend
 * @param {IAddFriendTypesProps} props
 * @return {JSX}
 */
const AddFriendScreen = (props: IAddFriendTypesProps) => {
  const { addFriend, navigation, isUpdate } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('friendList.addFriend'),
    })
  }, [])

  const handleAddFriend = () => {
    addFriend?.(inputValue)
  }

  const handleInputChange = (e: string) => {
    setInputValue(e.trim())
  }

  const insertBuffer = () => {
    getDataToBuffer().then((r) => {
      setInputValue(r)
    })
  }

  return (
    <WDRContainer isTransparentHeader>
      <WDRCombineItem
        bodyElement={<WDRText isSecondary>{t('friendList.enterKey')}</WDRText>}
        rightElement={
          <WDRButton
            title={t('friendList.insert').toLowerCase()}
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
        keyboardType="numeric"
        maxLength={16}
        inputContainerStyle={styles.inputBox}
      />

      <WDRButton
        title={t('friendList.qrAdd')}
        onPress={() => Navigate.toQRCodeScanScreen(handleInputChange)}
        isSecondary
      />

      <View style={styles.addBtnBox}>
        <WDRButton
          title={t('friendList.add')}
          isDisabled={inputValue.length !== 16}
          onPress={handleAddFriend}
          isLoading={isUpdate}
          isSecondary
        />
      </View>
    </WDRContainer>
  )
}

export default AddFriendScreen
