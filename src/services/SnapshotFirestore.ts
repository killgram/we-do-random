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

/**
 * @description update invite players status in snapshot
 * @param {string} userId
 * @param {(data:any) => void} callback
 * @return {Promise}
 */
const snapUpdateInviteStatus = (
  userId: string,
  callback: (data: any) => void,
) => {
  return firestore()
    .collection(Collections.USERS)
    .doc(userId)
    .onSnapshot((documentSnapshot) => {
      callback(documentSnapshot.data()?.invite)
    })
}

/**
 * @description update accepted user status in snapshot
 * @param {string} leadId
 * @param {(data:any) => void} callback
 * @return {Promise}
 */
const snapUpdateAcceptedStatus = (
  leadId: string,
  callback: (data: any) => void,
) => {
  return firestore()
    .collection(Collections.GAMES)
    .doc(leadId)
    .onSnapshot((documentSnapshot) => {
      callback(documentSnapshot.data()?.playersList)
    })
}

/**
 * @description update game view in snapshot
 * @param {string} leadId
 * @param {(data:any) => void} callback
 * @return {Promise}
 */
const snapUpdateViewGame = (leadId: string, callback: (data: any) => void) => {
  return firestore()
    .collection(Collections.GAMES)
    .doc(leadId)
    .onSnapshot((documentSnapshot) => {
      callback(documentSnapshot.data())
    })
}

export {
  snapUpdateFriendStatus,
  snapUpdateInviteStatus,
  snapUpdateAcceptedStatus,
  snapUpdateViewGame,
}
