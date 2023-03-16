// export const BASE_URL = 'https://restcountries.com/v3.1'
export const BASE_URL = 'https://biggbeat.onrender.com'
export const BRAND_NAME = 'BiggBeats'

export const ACCESS_TYPES = { PUBLIC: 'PUBLIC', PRIVATE: 'PRIVATE' }

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

export const validateMsgRequired = (label) => {
  return `${label} is required`
}
