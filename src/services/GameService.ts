import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'

/**
 * @description update user play status in Firestore
 * @param {string} userId
 * @param {boolean} status
 */
const dbUpdatePlayStatus = async (userId: string, status: boolean) => {
  await firestore().collection(Collections.USERS).doc(userId).update({
    isPlay: status,
  })
  return true
}

export { dbUpdatePlayStatus }
