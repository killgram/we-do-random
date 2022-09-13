import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'

/**
 * @description auth user in Firestore
 * @param {string} userId
 * @param {string} username
 */
const dbLogin = async (userId: string, username: string) => {
  await firestore().collection(Collections.USERS).doc(userId).set({
    username: username,
    userId: userId,
    isOnline: false,
    isPlay: false,
  })
  return true
}

/**
 * @description delete user in Firestore
 * @param {string} userId
 */
const dbLogout = async (userId: string) => {
  await firestore().collection(Collections.USERS).doc(userId).delete()
  return true
}

export { dbLogin, dbLogout }
