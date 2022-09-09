import Toast from 'react-native-toast-message'

/**
 * @description Method to call toast copied successfully
 */
const onSuccessCopyToast = () => {
  Toast.show({
    type: 'successCopy',
    visibilityTime: 1500,
  })
}

/**
 * @description Method to call error toast
 * @param {string} text
 */
const errorToast = (text: string) => {
  Toast.show({
    type: 'errorCustom',
    visibilityTime: 1500,
    text1: text,
  })
}

/**
 * @description Method to call success toast
 * @param {string} text
 */
const successToast = (text: string) => {
  Toast.show({
    type: 'successCustom',
    visibilityTime: 1500,
    text1: text,
  })
}

export { onSuccessCopyToast, errorToast, successToast }
