import { REQUEST_TYPE } from '@/constants'
import { deleteCall, getCall, patchCall, postCall } from '@/services/services'
import { manupulateResponse } from '@/services/responseManupulator'

export const request = async ({
  apiurl = {},
  data = {},
  params = '',
  query = '',
  header = {},
}) => {
  try {
    let res = null
    if (apiurl.requestType === REQUEST_TYPE.get) {
      res = await getCall(apiurl, params, query, header)
    } else if (apiurl.requestType === REQUEST_TYPE.post) {
      res = await postCall(apiurl, data, params, query, header)
    } else if (apiurl.requestType === REQUEST_TYPE.patch) {
      res = await patchCall(apiurl, data, params, query, header)
    } else if (apiurl.requestType === REQUEST_TYPE.patch) {
      res = await deleteCall(apiurl, params, query, header)
    }
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}
