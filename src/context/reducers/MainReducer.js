import { SET_USER_CART_WHITE_LIST, SET_USER_DATA_WHITE_LIST } from '@/constants'
import {
  DELETE_CART_DATA,
  LOGOUT_USER,
  SET_CART_ALL_DATA,
  SET_CART_DATA,
  SET_CART_QUANTITY_DATA,
  SET_USER,
  SET_USER_DATA,
} from '../action-types'

export const SET_DATA = 'SET_DATA'

export function MainReducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.data }
    case SET_USER:
      return { ...state, user: action.user }
    case SET_USER_DATA: {
      SET_USER_DATA_WHITE_LIST(action.user)
      return { ...state, user: action.user }
    }
    case LOGOUT_USER: {
      SET_USER_DATA_WHITE_LIST(null)
      return { ...state, user: null }
    }
    //cart cases
    case SET_CART_DATA: {
      let cloneCart = [...(state.cart ?? [])]
      let findProdInCart = cloneCart?.findIndex(
        (dt) =>
          dt?.slug === action.payload.slug &&
          dt?.attribute?.every((dta) =>
            action?.payload?.attribute?.find(
              (payloadAttrib) =>
                payloadAttrib?.attributeValue === dta?.attributeValue &&
                payloadAttrib?.attributeKey === dta?.attributeKey
            )
              ? true
              : false
          )
      )
      if (findProdInCart >= 0) {
        let payload = {
          ...cloneCart[findProdInCart],
        }
        const updated_quantity = payload.quantity + 1

        cloneCart.splice(findProdInCart, 1, {
          ...payload,
          quantity: updated_quantity,
          total: payload?.inDiscount
            ? updated_quantity * Number(payload?.discountedPrice)
            : updated_quantity * Number(payload?.price),
        })
      } else {
        let payload = {
          ...action.payload,
        }
        cloneCart.push({
          ...payload,
          quantity: 1,
          total: payload?.inDiscount
            ? Number(payload?.discountedPrice)
            : Number(payload?.price),
        })
      }
      SET_USER_CART_WHITE_LIST(cloneCart)
      return { ...state, cart: cloneCart }
    }

    case SET_CART_QUANTITY_DATA: {
      let cloneCart = [...(state.cart ?? [])]
      let findProdInCart = cloneCart?.findIndex(
        (dt) =>
          dt?.slug === action.payload.slug &&
          dt?.attribute?.every((dta) =>
            action?.payload?.attribute?.some(
              (payloadAttrib) =>
                payloadAttrib?.attributeValue === dta?.attributeValue &&
                payloadAttrib?.attributeKey === dta?.attributeKey
            )
          )
      )
      console.log({ findProdInCart, P: action.payload })
      if (findProdInCart >= 0) {
        let payload = {
          ...action.payload,
        }
        cloneCart.splice(findProdInCart, 1, {
          ...payload,
          total: payload?.inDiscount
            ? payload?.quantity * Number(payload?.discountedPrice)
            : payload.quantity * Number(payload?.price),
        })
      }
      SET_USER_CART_WHITE_LIST(cloneCart)
      return { ...state, cart: cloneCart }
    }

    case DELETE_CART_DATA: {
      let cloneCart = [...(state.cart ?? [])]
      let findProdInCart = cloneCart?.findIndex(
        (dt) => dt?.slug === action.payload
      )
      if (findProdInCart >= 0) {
        cloneCart.splice(findProdInCart, 1)
      }
      SET_USER_CART_WHITE_LIST(cloneCart)
      return { ...state, cart: cloneCart }
    }

    case SET_CART_ALL_DATA: {
      return { ...state, cart: action.payload }
    }
  }
}
