import React from 'react'
import { Button } from 'react-native'
import { IGameMainScreenTypesProps } from './GameMainTypes'
import getStyle from './GameMainStyles'
import { Navigate } from '@navigators'
import { WDRContainer, WDRText } from '@ui-kit/components'

/**
 * @description GameMainScreen
 * @param {IGameMainScreenTypesProps} props
 * @return {JSX}
 */
const GameMainScreen = (props: IGameMainScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  console.log('GameMainScreen')
  return (
    <WDRContainer style={styles.container}>
      <WDRText>Hello, test text components</WDRText>
      <WDRText isTitle>Hello, test text components title</WDRText>
      <WDRText isSecondary>Hello, test text components secondary</WDRText>
      <WDRText isLink>Hello, test text components link</WDRText>
      <WDRText isError>Hello, test text components error</WDRText>

      <Button title="to blank" onPress={Navigate.toBlank} />
    </WDRContainer>
  )
}

export default GameMainScreen
