import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'

/**
 * @description get about app status in Firestore
 */
const dbGetAboutAppStatus = async () => {
  return await firestore()
    .collection(Collections.ABOUT_APP)
    .doc(Collections.ABOUT_APP_DOC)
    .get()
}

export { dbGetAboutAppStatus }
