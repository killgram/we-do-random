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

export { onSuccessCopyToast }
