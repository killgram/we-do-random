import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'

/**
 * @description update user status in snapshot
 * @param {string} userId
 * @param {(userId: string, status:boolean) => void} callback
 * @return {Promise}
 */
const snapUpdateFriendStatus = (
  userId: string,
  callback: (userId: string, status: boolean) => void,
) => {
  return firestore()
    .collection(Collections.USERS)
    .doc(userId)
    .onSnapshot((documentSnapshot) => {
      callback(userId, documentSnapshot.data()?.isOnline)
    })
}

export { snapUpdateFriendStatus }
