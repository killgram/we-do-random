import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'

/**
 * @description add phrase in game in Firestore
 * @param {string} leadUserId
 * @param {string} username
 * @param {string} userId
 * @param {string} phrase
 * @param {number} phraseId
 */
const dbAddPhrase = async (
  leadUserId: string,
  username: string,
  userId: string,
  phrase: string,
  phraseId: number,
) => {
  const oldData = await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .get()

  await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .update({
      list: {
        ...oldData?.data()?.list,
        [phraseId]: {
          username: username,
          userId: userId,
          phrase: phrase,
          phraseId: phraseId,
        },
      },
    })

  return true
}

/**
 * @description delete phrase out of game in Firestore
 * @param {string} leadUserId
 * @param {number} phraseId
 */
const dbDeletePhrase = async (leadUserId: string, phraseId: number) => {
  const oldData = await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .get()

  delete oldData?.data()?.list[phraseId]

  await firestore()
    .collection(Collections.GAMES)
    .doc(leadUserId)
    .update({
      list: {
        ...oldData?.data()?.list,
      },
    })

  return true
}

export { dbAddPhrase, dbDeletePhrase }
