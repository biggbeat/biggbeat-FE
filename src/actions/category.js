import { GET_ALL_CATEGORY_PRODUCTS_URL } from '@/constants'
import { manupulateResponse } from '@/services/responseManupulator'
import { getCall } from '@/services/services'

export const getAllCategoriesProductsRequest = async () => {
  try {
    const res = await getCall(GET_ALL_CATEGORY_PRODUCTS_URL)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}
