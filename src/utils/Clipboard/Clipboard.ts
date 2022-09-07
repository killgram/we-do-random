import Clipboard from '@react-native-clipboard/clipboard'

/**
 * @description Method for copying data to clipboard
 * @param {string} value
 */
const copyToClipboard = (value: string) => {
  Clipboard.setString(value)
}

export { copyToClipboard }
