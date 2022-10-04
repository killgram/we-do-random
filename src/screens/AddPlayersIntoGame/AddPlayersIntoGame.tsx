import React, { useLayoutEffect, useState } from 'react'
import getStyle from './AddPlayersIntoGameStyles'
import {
  WDRButton,
  WDRCombineItem,
  WDRContainer,
  WDRInput,
  WDRText,
} from '@ui-kit/components'
import { IAddPlayersIntoGameScreenProps } from './AddPlayersIntoGameTypes'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'
import { getDataToBuffer } from '@utils'
import { View } from 'react-native'

/**
 * @description AddPlayersIntoGame
 * @param {IAddPlayersIntoGameScreenProps} props
 * @return {JSX}
 */
const AddPlayersIntoGame = (props: IAddPlayersIntoGameScreenProps) => {
  const { navigation, userId, addPlayer } = props
  const styles = getStyle()
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')
  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: t('teamGame.addPlayer'),
    })
  }, [])

  const handleAddPlayer = () => {
    addPlayer?.(userId!, inputValue)
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
    <WDRContainer isTransparentHeader isKeyBoardDismiss={false}>
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
        title={t('game.friendList')}
        onPress={() => Navigate.toAddFriendIntoGameScreen(handleInputChange)}
        isTransparent
        titleStyle={styles.friendListBtn}
      />

      <WDRButton
        title={t('friendList.qrAdd')}
        onPress={() => Navigate.toQRCodeScanScreen(handleInputChange)}
        isSecondary
        style={styles.qrAddBtn}
      />

      <View style={styles.addBtnBox}>
        <WDRButton
          title={t('friendList.add')}
          isDisabled={inputValue.length !== 16}
          onPress={handleAddPlayer}
          isSecondary
        />
      </View>
    </WDRContainer>
  )
}

export default AddPlayersIntoGame
