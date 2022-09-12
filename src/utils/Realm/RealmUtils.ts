import Realm from 'realm'
import { keyGenerate } from '@utils'

const PhraseSchema = {
  name: 'PhraseSchema',
  properties: {
    _id: 'int',
    name: 'string',
  },
  primaryKey: '_id',
}

/**
 * @description add value into phrase realm
 * @param {string} inputValue
 * @return {boolean}
 */
const addPhrase = async (inputValue: string) => {
  const realm = await Realm.open({
    path: 'phaseListRealm',
    schema: [PhraseSchema],
  })
  realm.write(() => {
    realm.create('PhraseSchema', {
      _id: keyGenerate() * 10 ** 10,
      name: inputValue,
    })
  })
  realm.close()
  return true
}

/**
 * @description delete value in realm and handle data clear
 * @param {number} id
 * @param {Array<{ name: string; id: number }>} data
 * @param {(value: Array<{ name: string; id: number }>) => void} setData callback for data
 * @return {boolean}
 */
const deletePhrase = async (
  id: number,
  data: Array<{ name: string; id: number }>,
  setData: (value: Array<{ name: string; id: number }>) => void,
) => {
  const realm = await Realm.open({
    path: 'phaseListRealm',
    schema: [PhraseSchema],
  })
  const rData = realm.objects('PhraseSchema')
  let deletePhrase
  rData.forEach((item: any) => {
    if (item._id === id) {
      deletePhrase = item
    }
  })
  realm.write(() => {
    realm.delete(deletePhrase)
  })
  const temporary = data.filter((item) => {
    return item.id !== id
  })
  setData(temporary)
  realm.close()
  return true
}

/**
 * @description clear all data in realm
 * @param {(value: Array<{ name: string; id: number }>) => void} setData handler for data
 * @return {boolean}
 */
const clearPhrase = async (
  setData: (value: Array<{ name: string; id: number }>) => void,
) => {
  const realm = await Realm.open({
    path: 'phaseListRealm',
    schema: [PhraseSchema],
  })
  realm.write(() => {
    setData([])
    realm.deleteAll()
  })
  realm.close()
  return true
}

/**
 * @description get phrase list in realm
 * @param {(value: Array<{ name: string; id: number }>) => void} setData handler for data
 * @return {boolean}
 */
const getPhraseData = async (
  setData: (value: Array<{ name: string; id: number }>) => void,
) => {
  const realm = await Realm.open({
    path: 'phaseListRealm',
    schema: [PhraseSchema],
  })
  const rData = realm.objects('PhraseSchema')
  if (rData) {
    const temporary: Array<{ name: string; id: number }> = []
    rData.forEach((item: any) => {
      temporary.push({
        name: item.name,
        id: item._id,
      })
    })
    setData(temporary)
  }
  realm.close()
  return true
}

export { addPhrase, deletePhrase, clearPhrase, getPhraseData }
