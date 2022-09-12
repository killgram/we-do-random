import React, { useLayoutEffect, useState } from 'react'
import { ICreateGameTypesProps } from './CreateGameTypes'
import getStyle from './CreateGameStyles'
import { WDRButton, WDRContainer, WDRInput, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { Navigate } from '@navigators'

/**
 * @description CreateGame
 * @param {ICreateGameTypesProps} props
 * @return {JSX}
 */
const CreateGameScreen = (props: ICreateGameTypesProps) => {
  const { navigation, route, createGame, username, userId } = props
  const styles = getStyle()
  const { t } = useTranslation()

  const [gameName, setGameName] = useState('')

  const isSingle = route?.params?.type === 'single'

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: isSingle ? t('game.singleGame') : t('game.teamGame'),
    })
  }, [])

  const handleChangeGameName = (e: string) => {
    setGameName(e)
  }

  const goGame = () => {
    createGame?.(route?.params?.type!, gameName, {
      username: username!,
      userId: userId!,
    })
    setGameName('')
  }

  return (
    <WDRContainer isTransparentHeader>
      <WDRText isTitle style={styles.enterNameTitle}>
        {t('createGame.enterGameName')}
      </WDRText>

      <WDRInput value={gameName} onChangeText={handleChangeGameName} />

      {isSingle ? (
        <WDRButton
          isDisabled={gameName.length === 0}
          title={t('createGame.start')}
          onPress={goGame}
        />
      ) : (
        <WDRButton
          isDisabled={gameName.length === 0}
          title={t('createGame.invitePlayers')}
          onPress={goGame}
        />
      )}
    </WDRContainer>
  )
}

export default CreateGameScreen
