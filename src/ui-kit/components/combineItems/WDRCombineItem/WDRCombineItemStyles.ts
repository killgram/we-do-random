import { StyleSheet } from 'react-native'
import { height, width } from '@utils'

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height(10),
    paddingHorizontal: width(10),
  },
  noPadding: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
})
