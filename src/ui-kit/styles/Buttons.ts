import { height, radius } from '@utils'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseButtonStyle: {
    borderRadius: radius(8),
    height: height(56),
    alignItems: 'center',
    justifyContent: 'center',
    padding: height(10),
  },
})
