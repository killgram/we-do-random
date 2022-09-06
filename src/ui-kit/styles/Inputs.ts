import { StyleSheet } from 'react-native'

import { height, radius, sp } from '@utils'

export default StyleSheet.create({
  input: {
    fontSize: sp(18),
    padding: height(16),
  },
  inputContainer: {
    borderRadius: radius(8),
    borderWidth: height(1),
  },
})
