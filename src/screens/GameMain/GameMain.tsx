import React from 'react'
import { Button, Text, View } from 'react-native'
import { IGameMainScreenTypesProps } from './GameMainTypes'
import getStyle from './GameMainStyles'
import { Navigate } from '@navigators'
import { WDRContainer } from '@ui-kit/components'

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
      <View>
        <Text>
          GameMainScreen GameMainScreen GameMainScreen GameMainScreen
          GameMainScreen GameMainScreen
        </Text>
        <Text>hello 2</Text>
        <Button title="to blank" onPress={Navigate.toBlank} />
      </View>
    </WDRContainer>
  )
}

export default GameMainScreen
