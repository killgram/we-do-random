import React, { useLayoutEffect } from 'react'
import { ICreateGameTypesProps } from './CreateGameTypes'
import getStyle from './CreateGameStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'

/**
 * @description CreateGame
 * @param {ICreateGameTypesProps} props
 * @return {JSX}
 */
const CreateGameScreen = (props: ICreateGameTypesProps) => {
  const { language, logout, navigation, route } = props
  const styles = getStyle()
  const { t } = useTranslation()

  console.log(props)

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle:
        route?.params?.type === 'single'
          ? t('game.singleGame')
          : t('game.teamGame'),
    })
  }, [])

  return (
    <WDRContainer isTransparentHeader>
      <WDRText>CreateGame</WDRText>
    </WDRContainer>
  )
}

export default CreateGameScreen
