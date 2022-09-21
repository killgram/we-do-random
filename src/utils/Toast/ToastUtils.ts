import Toast from 'react-native-toast-message'
import { Platform } from 'react-native'

/**
 * @description Method to call toast copied successfully
 */
const onSuccessCopyToast = () => {
  const offSet = Platform.OS === 'android' ? 0 : 40
  Toast.show({
    type: 'successCopy',
    visibilityTime: 1500,
    topOffset: offSet,
  })
}

/**
 * @description Method to call error toast
 * @param {string} text
 */
const errorToast = (text: string) => {
  const offSet = Platform.OS === 'android' ? 0 : 40
  Toast.show({
    type: 'errorCustom',
    visibilityTime: 1500,
    text1: text,
    topOffset: offSet,
  })
}

/**
 * @description Method to call success toast
 * @param {string} text
 */
const successToast = (text: string) => {
  const offSet = Platform.OS === 'android' ? 0 : 40
  Toast.show({
    type: 'successCustom',
    visibilityTime: 1500,
    text1: text,
    topOffset: offSet,
  })
}

export { onSuccessCopyToast, errorToast, successToast }
