import { height, radius } from '@utils'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseButtonStyle: {
    borderRadius: radius(100),
    height: height(48),
    alignItems: 'center',
    justifyContent: 'center',
    padding: height(10),
  },
})
