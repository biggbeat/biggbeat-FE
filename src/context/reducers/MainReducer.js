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
        (dt) => dt?.slug === action.payload.slug
      )
      if (findProdInCart >= 0) {
        cloneCart.splice(findProdInCart, 1, {
          ...cloneCart[findProdInCart],
          quantity: cloneCart[findProdInCart].quantity + 1,
        })
      } else {
        cloneCart.push({ ...action.payload, quantity: 1 })
      }
      SET_USER_CART_WHITE_LIST(cloneCart)
      return { ...state, cart: cloneCart }
    }

    case SET_CART_QUANTITY_DATA: {
      let cloneCart = [...(state.cart ?? [])]
      let findProdInCart = cloneCart?.findIndex(
        (dt) => dt?.slug === action.payload.slug
      )
      if (findProdInCart >= 0) {
        cloneCart.splice(findProdInCart, 1, {
          ...action.payload,
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
