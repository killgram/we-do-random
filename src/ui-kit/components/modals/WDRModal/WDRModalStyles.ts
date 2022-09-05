import { StyleSheet } from 'react-native'
import { getThemeColor } from '@utils'

export default StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  background: {
    opacity: 0.25,
    backgroundColor: getThemeColor('MODAL_BACKGROUND'),
    width: '100%',
    height: '100%',
  },
  modal: { position: 'absolute' },
})
