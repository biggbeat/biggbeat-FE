import {
  GET_ALL_CATEGORY_PRODUCTS_URL,
  GET_PRODUCTS_BY_CATEGORY_URL,
} from '@/constants'
import { manupulateResponse } from '@/services/responseManupulator'
import { getCall, postCall } from '@/services/services'

export const getAllCategoriesProductsRequest = async () => {
  try {
    const res = await getCall(GET_ALL_CATEGORY_PRODUCTS_URL)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}

export const getProductsByCategoryRequest = async (slug) => {
  try {
    const res = await postCall(GET_PRODUCTS_BY_CATEGORY_URL, {
      categorySlug: slug,
    })
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}
