import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'
import { IGameStatus } from '@store/types/game/Interfaces'

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

/**
 * @description update game status in Firestore
 * @param {string} userId
 * @param {IGameStatus} status
 */
const dbUpdateGameStatus = async (userId: string, status: IGameStatus) => {
  await firestore().collection(Collections.GAMES).doc(userId).update({
    gameStatus: status,
  })
  return true
}

export { dbUpdateStatus, dbUpdateGameStatus }
