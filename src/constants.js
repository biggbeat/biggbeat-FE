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

export const GET_PRODUCTS_BY_CATEGORY_URL = {
  url: '/category/get-by-slug',
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
