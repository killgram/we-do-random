import { IPhrase } from '@store/types/game/Interfaces'

/**
 * @description calculate winner
 * @param {Array<IPhrase>} list
 * @return {IPhrase}
 */
const calcWinner = (list: Array<IPhrase>) => {
  return list[getRandomNumber(0, list.length - 1)]
}

/**
 * @description calculate win chance
 * @param {Array<IPhrase>} list
 * @param {string} userId
 * @param {string} gameType
 * @return {string}
 */
const calcChance = (
  list: Array<IPhrase>,
  userId?: string,
  gameType?: string,
): string => {
  let result
  let coincidence = 0
  list.forEach((item) => {
    if (item.userId === userId) {
      coincidence++
    }
  })

  if (gameType === 'single') {
    result = (100 / coincidence).toFixed(2)
  } else {
    result = ((100 * coincidence) / list.length).toFixed(2)
  }
  return result
}

/**
 * @description the function returns a random integer in the range, including the range
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export { calcWinner, calcChance }
