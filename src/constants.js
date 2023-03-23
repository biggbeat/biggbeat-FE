// export const BASE_URL = 'https://restcountries.com/v3.1'
export const BASE_URL = 'https://biggbeat.onrender.com'
export const BRAND_NAME = 'BiggBeats'

export const ACCESS_TYPES = { PUBLIC: 'PUBLIC', PRIVATE: 'PRIVATE' }

////////////////////public routes

export const SINGLE_CATEGORY_ROUTE = '/shoes-men'

export const GET_ALL_COUNTRIES_URL = {
  url: '/all',
  accesstoken: false,
  headers: false,
}

//banner apis
export const GET_HOME_BANNER_URL = {
  url: '/banner/get-banner',
  accesstoken: false,
  headers: false,
}
//sections apis
export const GET_SECTIONS_URL = {
  url: '/section/get-section',
  accesstoken: false,
  headers: false,
}

//category apis
export const GET_CATEGORY_URL = {
  url: '/category/get-category',
  accesstoken: false,
  headers: false,
}

//ALL category PRODS apis
export const GET_ALL_CATEGORY_PRODUCTS_URL = {
  url: '/category/get-category-products',
  accesstoken: false,
  headers: false,
}

//validations
export const validateMsgRequired = (label) => {
  return `${label} is required`
}
