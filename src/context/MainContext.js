import { GET_USER_CART_WHITE_LIST, GET_USER_DATA_WHITE_LIST } from '@/constants'
import React, { useContext, useEffect, useReducer } from 'react'
import { SET_CART_ALL_DATA, SET_USER } from './action-types'
import { MainReducer, SET_DATA } from './reducers/MainReducer'

export const MainContext = React.createContext(null)

export default function MainProvider({ children }) {
  const [MainState, dispatch] = useReducer(MainReducer, {
    data: false,
    user: null,
    cart: [],
  })

  useEffect(() => {
    const userData = GET_USER_DATA_WHITE_LIST()
    const userCart = GET_USER_CART_WHITE_LIST()

    if (userData) {
      dispatch({ type: SET_USER, user: userData })
    }
    if (userCart?.length) {
      dispatch({ type: SET_CART_ALL_DATA, payload: userCart })
    }
  }, [])

  const data = {
    MainState,
    dispatch,
  }

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>
}
