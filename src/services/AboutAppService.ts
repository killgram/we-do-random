import firestore from '@react-native-firebase/firestore'
import { Collections, Domains } from '@configurations'
import axios from 'axios'

/**
 * @description get about app status
 */
const dbGetAboutAppStatus = async () => {
  let data = {}
  const url = `${Domains.getR3D3InfoDomain()}/common/getAppPersonalize`
  const response = await axios.get(url)
  response.data.list.forEach((item) => {
    data = { ...data, ...item }
  })
  const fireData = await firestore()
    .collection(Collections.ABOUT_APP)
    .doc(Collections.ABOUT_APP_DOC)
    .get()
  const resData = fireData?.data()
  data = {
    ...data,
    ...resData,
  }
  return data
}

export { dbGetAboutAppStatus }
