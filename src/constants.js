import { notification } from 'antd'
import { useContext } from 'react'
import { MainContext } from './context/MainContext'

// export const BASE_URL = 'https://restcountries.com/v3.1'
export const BASE_URL = 'https://biggbeat.onrender.com'
export const BRAND_NAME = 'BiggBeats'
export const DUMMY_IMAGE =
  'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

export const FALLBACK_IMAGE =
  'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
export const ACCESS_TYPES = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  AUTH: 'auth',
}

export const REQUEST_TYPE = {
  get: 'get',
  post: 'post',
  patch: 'patch',
  put: 'put',
  delete: 'delete',
}

export const SUCCESS_STATUS = '0000'
export const ERROR_USER_NOT_VERIFIED = '0001'
export const ERROR_STATUS = '9999'

export const SUCCESS_MESSAGE_TYPE = 'success'
export const ERROR_MESSAGE_TYPE = 'error'

export const SET_USER_DATA_WHITE_LIST = (data) => {
  localStorage.setItem(BRAND_NAME, JSON.stringify(data))
}

export const GET_USER_DATA_WHITE_LIST = () => {
  return JSON.parse(localStorage.getItem(BRAND_NAME))
}

export const toastMessage = (type, message) => {
  notification.open({
    type: type,
    message: SUCCESS_MESSAGE_TYPE === type ? 'Success' : 'Error',
    description: message,
  })
}

////////////////////public routes

export const SINGLE_CATEGORY_ROUTE = '/shoes-men'
export const ALL_CATEGORY_PAGE_ROUTE = {
  title: 'Categories',
  url: '/categories',
}
export const SINGE_CATEGORY_PAGE_ROUTE = {
  title: 'Category',
  url: '/category/:slug',
}
export const LOGIN_PAGE_ROUTE = {
  title: 'Login',
  url: '/login',
}
export const RESET_PASSWORD_PAGE_ROUTE = {
  title: 'Reset Password',
  url: '/reset-password',
}

export const SIGNUP_PAGE_ROUTE = {
  title: 'SignUp',
  url: '/signup',
}
export const OTP_PAGE_ROUTE = {
  title: 'Verify Otp',
  url: '/otp',
}

export const FORGOT_PASSWORD_PAGE_ROUTE = {
  title: 'Forgot Password',
  url: '/forgot-password',
}

export const SINGLE_PRODUCT_PAGE_ROUTE = {
  title: 'Product',
  url: '/:slug',
}

export const GET_ALL_COUNTRIES_URL = {
  url: '/all',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.get,
}

// users apis
export const SIGN_UP_URL = {
  url: '/user/signup',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.post,
}

export const LOGIN_URL = {
  url: '/user/signin',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.post,
}

export const VERIFY_OTP_URL = {
  url: '/user/verify',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.post,
}

export const RESEND_OTP_TO_EMAIL_URL = {
  url: '/user/resend-otp',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.post,
}

export const RESET_PASSWORD_URL = {
  url: '/user/reset-password',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.post,
}

//banner apis
export const GET_HOME_BANNER_URL = {
  url: '/banner/get-banner',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.get,
}
//sections apis
export const GET_SECTIONS_URL = {
  url: '/section/get-section',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.get,
}

//category apis
export const GET_CATEGORY_URL = {
  url: '/category/get-category',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.get,
}

export const GET_PRODUCTS_BY_CATEGORY_URL = {
  url: '/category/get-by-slug',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.post,
}

//ALL category PRODS apis
export const GET_ALL_CATEGORY_PRODUCTS_URL = {
  url: '/category/get-category-products',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.get,
}

//product apis

export const GET_PRODUCT_BY_SLUG = {
  url: '/product/get-product-by-slug',
  accesstoken: false,
  headers: false,
  requestType: REQUEST_TYPE.post,
}

//validations
export const validateMsgRequired = (label) => {
  return `${label} is required`
}

export const validateMaxLengthMessage = (label) => {
  return `Maximum ${label} characters are accepted`
}

export const validateMinLengthMessage = (label) => {
  return `Minimum ${label} characters are accepted`
}

export const validateNotValidMessage = (label) => {
  return `${label} is not valid`
}

// row col props

export const FULL_ROW = {
  lg: { span: 24 },
  xl: { span: 24 },
  md: { span: 24 },
  sm: { span: 24 },
  xs: { span: 24 },
}

export const HALF_SPACE = {
  lg: { span: 12 },
  xs: { span: 12 },
  xl: { span: 12 },
  md: { span: 12 },
  sm: { span: 12 },
}

export const FOUR_ITEMS_ROW = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 6 },
}

export const THREE_ITEMS_ROW = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 24 },
  lg: { span: 8 },
  xl: { span: 8 },
}

export const THREE_ITEM_ROWS = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 8 },
  lg: { span: 8 },
  xl: { span: 6 },
}

export const THREE_ITEM_ROWS_2 = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 8 },
  xl: { span: 8 },
}

export const TWO_THIRD_ROW = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 16 },
  lg: { span: 16 },
  xl: { span: 16 },
}

export const HALF_ROW_FULL_WIDTH_XS = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 12 },
}

export const HALF_ROW_FULL_WIDTH_FROM_MD = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 24 },
  lg: { span: 12 },
  xl: { span: 12 },
}

export const CATEGORY_SORT_OPTIONS = [
  { label: 'Whats New', value: 'new' },
  { label: 'Price Low to High', value: 'lowToHigh' },
  { label: 'Price High to Low', value: 'highToLow' },
  { label: 'Discount Low to high', value: 'discountLowToHigh' },
]
export const CATEGORY_SORT_OPTIONS_VALUE = {
  new: 'new',
  lowTohigh: 'lowToHigh',
  highToLow: 'highToLow',
  discountLowToHigh: 'discountLowToHigh',
}
export const FILTER_SIZE_OPTIONS = [
  { label: 'Large', value: 'Large' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Small', value: 'Small' },
]

export const FILTER_BRAND_OPTIONS = [
  { label: 'Nikee', value: 'nikee' },
  { label: 'Servis', value: 'servis' },
  { label: 'Bata', value: 'bata' },
]
export const BREAD_CRUMBS_PAGES = {
  SINGLE_CATEGORY_PAGE: [{ label: 'Category', link: null }],
}
