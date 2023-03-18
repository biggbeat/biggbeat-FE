import { GET_HOME_BANNER_URL, GET_SECTIONS_URL } from '@/constants'
import { manupulateResponse } from '@/services/responseManupulator'
import { getCall } from '@/services/services'

export const getBannerRequest = async () => {
  try {
    const res = await getCall(GET_HOME_BANNER_URL)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}
export const getSectionsRequest = async () => {
  try {
    const res = await getCall(GET_SECTIONS_URL)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}
