/**
 * @description calculating userId based on username
 * @param {string} username
 * @return {string}
 */
const getUserId = (username: string) => {
  const idValue = 16
  const genWord = `${username}${generateWord(idValue)}`
  const genResult: Array<number> = []
  let result = ''

  for (let i = 0; i < genWord.length; i++) {
    let val = genWord[i].charCodeAt(0)
    do {
      val = Number(calcTinyValue(val))
    } while (String(val).length !== 1)
    genResult.push(val)
  }
  shuffle(genResult)

  for (let i = 0; i < idValue; i++) {
    result += genResult[i]
  }
  return result
}

/**
 * @description Calculates a small number from a large number
 * @param {number} val large number
 * @return {string}
 */
const calcTinyValue = (val: number) => {
  return String(val)
    .split('')
    .reduce((sum, e) => String(Number(sum) + Number(e)))
}

/**
 * @description Generates a word from random numbers and letters of a given length
 * @param {number} idValue Generated word length
 * @return {string}
 */
const generateWord = (idValue: number) => {
  let result = ''
  const letters =
    '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  const maxPosition = letters.length - 1
  for (let i = 0; i < idValue; ++i) {
    const position = Math.floor(Math.random() * maxPosition)
    result = result + letters.substring(position, position + 1)
  }

  return result
}

/**
 * @description Shuffles the array
 * @param array
 * @return {[]}
 */
const shuffle = (array: Array<number>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export { getUserId }
