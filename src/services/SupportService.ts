import firestore from '@react-native-firebase/firestore'
import { Collections } from '@configurations'
import { Domains } from '@configurations'
import axios from 'axios'

/**
 * @description get support data in Firestore
 */
const dbGetSupportData = async () => {
  return await firestore()
    .collection(Collections.SUPPORT)
    .doc(Collections.SUPPORT_DOC)
    .get()
}

/**
 * @description get support data in R3D3-info service
 */
const dbSupportInfoData = async () => {
  const url = `${Domains.getR3D3InfoDomain()}/getSupportInfo`
  return axios.get(url)
}

export { dbGetSupportData, dbSupportInfoData }
