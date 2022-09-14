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

/**
 * @description create game in Firestore
 * @param {string} leadUsername
 * @param {string} leadUserId
 * @param {string} gameName
 * @param {string} gameType
 */
const dbCreateGame = async (
  leadUsername: string,
  leadUserId: string,
  gameName: string,
  gameType: string,
) => {
  await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .set({
      gameLead: {
        username: leadUsername,
        userId: leadUserId,
      },
      gameName: gameName,
      gameType: gameType,
    })
  return true
}

/**
 * @description update players list in Firestore
 * @param {string} leadUserId
 * @param {string} username
 * @param {string} userId
 * @param {boolean} isOnline
 */
const dbUpdatePlayers = async (
  leadUserId: string,
  username: string,
  userId: string,
  isOnline: boolean,
) => {
  const oldData = await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .get()
  await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .update({
      playersList: {
        ...oldData?.data()?.playersList,
        [userId]: {
          username: username,
          userId: userId,
          isOnline: isOnline,
        },
      },
    })
  return true
}

/**
 * @description close game in Firestore
 * @param {string} userId
 */
const dbCloseGame = async (userId: string) => {
  await firestore().collection(Collections.GAMES).doc(userId).delete()
  return true
}

/**
 * @description remove player in players List
 * @param {string} leadUserId
 * @param {string} userId
 * @return {boolean}
 */
const dbRemovePlayer = async (leadUserId: string, userId: string) => {
  const oldData = await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .get()
  delete oldData?.data()?.playersList[userId]
  await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .update({
      playersList: {
        ...oldData?.data()?.playersList,
      },
    })
  return true
}

export {
  dbUpdatePlayStatus,
  dbCreateGame,
  dbUpdatePlayers,
  dbCloseGame,
  dbRemovePlayer,
}
