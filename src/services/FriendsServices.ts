import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'

/**
 * @description check user in Firestore
 * @param {string} userId
 * @return {Promise}
 */
const dbCheckUser = async (userId: string) => {
  return await firestore().collection(Collections.USERS).doc(userId).get()
}

/**
 * @description add user in friend List
 * @param {string} userId
 * @param {string} friendId
 * @param {string} friendName
 * @return {boolean}
 */
const dbAddFriend = async (
  userId: string,
  friendId: string,
  friendName: string,
) => {
  await firestore()
    .collection(Collections.FRIENDLIST)
    .doc(userId)
    .set({
      [friendId]: {
        username: friendName,
      },
    })
  return true
}

/**
 * @description update user friend List
 * @param {string} userId
 * @param {string} friendId
 * @param {string} friendName
 * @return {boolean}
 */
const dbUpdateFriendList = async (
  userId: string,
  friendId: string,
  friendName: string,
) => {
  await firestore()
    .collection(Collections.FRIENDLIST)
    .doc(userId)
    .update({
      [friendId]: {
        username: friendName,
      },
    })
  return true
}

/**
 * @description remove user in friend List
 * @param {string} userId
 * @param {string} friendId
 * @return {boolean}
 */
const dbRemoveFriend = async (userId: string, friendId: string) => {
  await firestore()
    .collection(Collections.FRIENDLIST)
    .doc(userId)
    .update({
      [friendId]: firestore.FieldValue.delete(),
    })
  return true
}

export { dbCheckUser, dbAddFriend, dbUpdateFriendList, dbRemoveFriend }
