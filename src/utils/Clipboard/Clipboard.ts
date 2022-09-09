import Clipboard from '@react-native-clipboard/clipboard'

/**
 * @description Method for copying data to clipboard
 * @param {string} value
 */
const copyToClipboard = (value: string) => {
  Clipboard.setString(value)
}

/**
 * @description Method for get data to buffer
 * @return {Promise<string>}
 */
const getDataToBuffer = async () => {
  return await Clipboard.getString()
}

export { copyToClipboard, getDataToBuffer }
