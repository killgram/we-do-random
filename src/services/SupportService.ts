import { Domains } from '@configurations'
import axios from 'axios'

/**
 * @description get support data in Firestore
 */
const dbGetSupportData = async () => {
  const url = `${Domains.getR3D3InfoDomain()}/common/getAppPersonalize`
  const response = await axios.get(url)
  return response.data.email
}

/**
 * @description get support data in R3D3-info service
 */
const dbSupportInfoData = async () => {
  const url = `${Domains.getR3D3InfoDomain()}/common/getSupportInfo`
  return axios.get(url)
}

export { dbGetSupportData, dbSupportInfoData }
