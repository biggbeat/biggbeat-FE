export const BASE_URL = 'https://restcountries.com/v3.1'
export const BRAND_NAME = 'BiggBeats'

export const ACCESS_TYPES = { PUBLIC: 'PUBLIC', PRIVATE: 'PRIVATE' }
export const GET_ALL_COUNTRIES_URL = {
  url: '/all',
  accesstoken: false,
  headers: false,
}

export const validateMsgRequired = (label) => {
  return `${label} is required`
}
