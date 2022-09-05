import React from 'react'
import { Text, View } from 'react-native'
import { IProfileMainScreenTypesProps } from './ProfileMainTypes'
import getStyle from './ProfileMainStyles'
import { WDRContainer } from '@ui-kit/components'

/**
 * @description ProfileMainScreen
 * @param {IProfileMainScreenTypesProps} props
 * @return {JSX}
 */
const ProfileMainScreen = (props: IProfileMainScreenTypesProps) => {
  const {} = props
  const styles = getStyle()
  console.log('ProfileMainScreen')
  return (
    <WDRContainer>
      <View style={styles.container}>
        <Text>
          ProfileMainScreen ProfileMainScreen ProfileMainScreen
          ProfileMainScreen ProfileMainScreen ProfileMainScreen
        </Text>
        <Text>hello 2</Text>
      </View>
    </WDRContainer>
  )
}

export default ProfileMainScreen
