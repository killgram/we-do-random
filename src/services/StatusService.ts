import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'

/**
 * @description update user status in Firestore
 * @param {string} userId
 * @param {boolean} status
 */
const dbUpdateStatus = async (userId: string, status: boolean) => {
  await firestore().collection(Collections.USERS).doc(userId).update({
    isOnline: status,
  })
  return true
}

export { dbUpdateStatus }
