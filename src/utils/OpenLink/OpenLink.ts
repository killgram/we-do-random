import { Linking, Alert } from 'react-native'

/**
 * @description need to open ref link
 * @param {string} url
 */
const openLink = (url: string) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url)
    } else {
      Alert.alert(`Error`, `Can't open: ${url}`)
    }
  })
}

export { openLink }
